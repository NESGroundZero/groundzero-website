import pandas as pd
import json
import re
import argparse
import os

# Function to convert a person's name to a valid variable name for imgsrc
def format_imgsrc(name):
    # Lowercase and replace spaces with underscore
    return re.sub(r'\s+', '_', name.strip().lower())

def process_people(excel_file, sheet_name, output_file):
    print(f"Reading from '{excel_file}', sheet '{sheet_name}'...")
    
    # Read the Excel file with specified sheet
    df = pd.read_excel(excel_file, sheet_name=sheet_name)
    
    # Create an empty list to store people objects
    people = []
    # Keep track of all image variable names for imports
    image_vars = set()
    
    # Iterate over each row in the DataFrame
    for index, row in df.iterrows():
        # Skip rows that do not have a name
        if pd.isna(row.get("Name", None)):
            continue
            
        # Format the image name
        img_name = format_imgsrc(row["Name"])
        # Add to our set of image variables
        image_vars.add(img_name)
        
        person = {
            "title": row["Name"],
            "AreaOfFocus": row["Area of Focus"] if not pd.isna(row.get("Area of Focus")) else "",
            # Put designation in a list if available, otherwise an empty list
            "subtitle": [row["Designation"]] if not pd.isna(row.get("Designation")) else [],
            # Company as a list
            "company": [row["Company"]] if not pd.isna(row.get("Company")) else [],
            "personalLink": row["LinkedIn"] if not pd.isna(row.get("LinkedIn")) else "",
            # Using the formatted name as the imgsrc placeholder
            "imgsrc": img_name,
            # Description can be filled with additional notes if you have them
            "description": [""]
        }
        people.append(person)
    
    # Determine variable name based on sheet name
    var_name = sheet_name.lower().replace(" ", "_")
    
    # Dump people as JSON
    json_output = json.dumps(people, indent=2)
    
    # Remove the quotes from the value of "imgsrc"
    json_output = re.sub(r'"imgsrc": "([^"]+)"', r'"imgsrc": \1', json_output)
    
    # Generate import statement with all image variables
    import_statement = f"import {{ {', '.join(sorted(image_vars))} }} from \"../../assets\";\n\n"
    
    # Create a JavaScript export string with the import statement
    js_export = import_statement + f"export const {var_name} = {json_output};"
    
    # Output to a file
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(js_export)
    
    print(f"Processed {len(people)} people from '{sheet_name}'")
    print(f"Added {len(image_vars)} image imports")
    print(f"JavaScript data exported to '{output_file}'")

def main():
    # Set up argument parser
    parser = argparse.ArgumentParser(description='Convert Excel data to JavaScript constants.')
    parser.add_argument('--excel', '-e', default='People.xlsx',
                        help='Path to Excel file (default: People.xlsx)')
    parser.add_argument('--sheet', '-s', default='Mentors',
                        help='Excel sheet name to read from (default: Mentors)')
    parser.add_argument('--output', '-o', default=None,
                        help='Output JavaScript file (default: based on sheet name)')
    
    args = parser.parse_args()
    
    # Set default output filename if not provided
    if args.output is None:
        args.output = f"{args.sheet.lower().replace(' ', '_')}.js"
    
    # Process the Excel file
    process_people(args.excel, args.sheet, args.output)

if __name__ == "__main__":
    main()