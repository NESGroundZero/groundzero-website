import React from "react";
import { contacts } from "../../constants";
import styles from "../../style";
import DisplayIcon from "./DisplayIcon";

const ContactUs = () => (
  <section
    // id="contacts"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>Contact Us</h1>
      <div className="w-full md:mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet. Qui nihil nesciunt et minus minus id
          veniam corporis et explicabo aperiam sed quia dolore aut quod soluta.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full contactus-container relative z-[1]">
      {contacts.map((card) => (
        <DisplayIcon key={card.id} {...card} />
      ))}
    </div>

    <div className="flex flex-wrap text-center sm:justify-center w-full contactus-container relative z-[1]">
      <h2 className={styles.heading3}>Send us an email</h2>

      <div class="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="space-y-6 px-4 py-5 sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                      Email
                    </span>
                    <input
                      type="text"
                      class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="yourname@gmail.com"
                    />
                  </div>
                  <div class="mt-5 flex rounded-md shadow-sm">
                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                      Phone
                    </span>
                    <input
                      type="text"
                      class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="81234567"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div class="mt-1">
                  <textarea
                    rows="10"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Write here ..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactUs;
