import { Fragment, useState, useContext } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
// Context
import { LedgerContext } from "../contexts/LedgerContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CmdPalette() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const { transactions, users } = useContext(LedgerContext);

  const filteredTransactions =
    query === ""
      ? []
      : transactions.filter((transaction) => {
          return transaction.title.toLowerCase().includes(query.toLowerCase());
        });

  //   const filteredItems =
  //     query === ''
  //       ? []
  //       : transactions.filter((transaction) => {
  //           return transaction.title.toLowerCase().includes(query.toLowerCase())
  //         })

  //   const groups = filteredItems.reduce((groups, item) => {
  //     return { ...groups, [item.category]: [...(groups[item.category] || []), item] }
  //   }, {})

  //   console.log(filteredItems)

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 p-4 overflow-y-auto sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-xl p-2 mx-auto transition-all transform bg-white shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
              <Combobox
                onChange={(transaction) =>
                  (window.location = transaction.transaction_id)
                }
              >
                <Combobox.Input
                  className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  onChange={(event) => setQuery(event.target.value)}
                />

                {filteredTransactions.length > 0 && (
                  <Combobox.Options
                    static
                    className="py-2 -mb-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2"
                  >
                    {filteredTransactions.map((transaction) => (
                      <Combobox.Option
                        key={transaction.transaction_id}
                        value={transaction.title}
                        className={({ active }) =>
                          classNames(
                            "cursor-default select-none rounded-md px-4 py-2",
                            active && "bg-indigo-600 text-white"
                          )
                        }
                      >
                        {transaction.title}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== "" && filteredTransactions.length === 0 && (
                  <div className="px-4 text-center py-14 sm:px-14">
                    {/* <UsersIcon className="w-6 h-6 mx-auto text-gray-400" aria-hidden="true" /> */}
                    <p className="mt-4 text-sm text-gray-900">
                      No Transactions found using that search term.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
