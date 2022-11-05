import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import founder1 from "../public/founder1.svg";
import founder2 from "../public/founder2.svg";
import bod1 from "../public/bod1.svg";
import bod2 from "../public/bod2.svg";
import bod3 from "../public/bod3.svg";
export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center h-60">
        <button
          className="px-6 py-3 text-purple-100 bg-purple-600 rounded-md"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8 w-screen">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
                  <div class="p-4 rounded-md flex items-center justify-center">
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                      <div class="flex items-center justify-center">
                        <Image src={bod1} />
                      </div>
                      <div class="rounded-md flex items-center justify-center">
                        <span className="text-bold text-2xl text-black">
                          Mr Binod Kumar Bawri
                          Mr Binod Kumar Bawri
                          Mr Binod Kumar Bawri
                          Mr Binod Kumar Bawri
                          Mr Binod Kumar Bawri
                          Mr Binod Kumar Bawri
                          Mr Binod Kumar Bawri
                          Mr Binod Kumar Bawri
                          Mr Binod Kumar Bawri
                          Mr Binod Kumar Bawri
                          Mr Binod Kumar Bawri
                        </span>
                      </div>
                      <div class="flex items-center justify-center">
                        <span className="text-bold text-xl text-black">
                          Board of directors
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="p-4  rounded-md flex items-center justify-center">
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
                      <div class="flex items-center justify-center">
                        <Image src={bod2} />
                      </div>
                      <div class="rounded-md flex items-center justify-center">
                        <span className="text-bold text-2xl text-black">
                          Mr A Surya Prakash
                        </span>
                      </div>
                      <div class="flex items-center justify-center">
                        <span className="text-bold text-xl text-black">
                          Board of directors
                        </span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
