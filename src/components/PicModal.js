import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

const PicModal = ({ show, onClose, src }) => {
  const [closeModal, setCloseModal] = useState(true);
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => onClose(!show)}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
                  <button
                    type='button'
                    className='rounded-md bg-white text-gray-400 hover:text-gray-500'
                    onClick={() => onClose(!show)}>
                    <span className='sr-only'>Close</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <div className='mt-4'>
                      <img
                        className='pointer-events-none rounded-lg object-fill group-hover:opacity-75'
                        src={src}
                      />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PicModal;
