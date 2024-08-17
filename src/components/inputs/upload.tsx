'use client';

// React & next Imports
import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

// Dropzone Imports
import Dropzone from 'react-dropzone';

// Formik Imports
import { FormikValues } from 'formik';

// Components
import Button from '../buttons/button';

// Services
// import { POST } from '@/services/axios-request-handler';
// import { URL } from '@/services/api-base-urls';

import { IoCloudUploadOutline } from 'react-icons/io5';

interface IProps {
  error?: boolean;
  name: string;
  setFieldValue?: FormikValues['setFieldValue'];
  value: string | null;
}

const Upload = ({ name, error, setFieldValue, value }: IProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(value);

  React.useEffect(() => {
    setImageSrc(value);
  }, [value]);

  const handleImageUpload = async (newFiles: File[]): Promise<void> => {
    const file = newFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      //  eslint-disable-next-line
      //   const response: any = await POST(URL.UPLOAD_IMAGE, formData);

      setFieldValue(name, imageSrc as string);

      // toast.success('Image uploaded successfully!', {
      //   position: 'top-right',
      // });
    } catch (error) {
      toast.error('Image upload failed!', {
        position: 'top-right',
      });
    }
  };

  return (
    <>
      {imageSrc ? (
        <Dropzone
          onDrop={acceptedFiles => handleImageUpload(acceptedFiles)}
          accept={{
            'image/jpeg': [],
            'image/png': [],
            'image/pdf': [],
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className={`${error ? 'border-red' : 'border-gray-300'} border rounded-full w-fit h-fit`}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Image
                alt=''
                src={imageSrc || ''}
                width={100}
                height={100}
                className='cursor-pointer rounded-full w-[100px] h-[100px]'
              />
            </div>
          )}
        </Dropzone>
      ) : (
        <Dropzone
          onDrop={acceptedFiles => handleImageUpload(acceptedFiles)}
          accept={{
            'image/jpeg': [],
            'image/png': [],
            'image/pdf': [],
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className='flex gap-x-3 items-center w-fit'
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {/* <Image
                alt=''
                src={UploadImage}
                width={100}
                height={100}
                className='cursor-pointer rounded-full w-[100px] h-[100px]'
              /> */}
              <IoCloudUploadOutline size={20} />
              <div className='flex flex-col gap-y-2'>
                <h3 className='font-medium text-text-primary'>Avatar</h3>
                <p className='text-text-secondary text-xs'>
                  Min 400x400px, PNG or JPEG
                </p>

                <Button
                  className='border-2 border-divider'
                  text='Select'
                  isOutline
                />
              </div>
            </div>
          )}
        </Dropzone>
      )}
    </>
  );
};

export default Upload;
