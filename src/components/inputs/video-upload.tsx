'use client';

// React & next Imports
import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

// Dropzone Imports
import Dropzone from 'react-dropzone';

// Components
import PrismCard from '../cards/prism-card';

// Formik Imports
import { FormikValues } from 'formik';

// Assets Imports
import Info from '@/../public/assets/icons/info.svg';
import Upload from '@/../public/assets/icons/upload-icon.svg';

// Services
// import { POST } from '@/services/axios-request-handler';
// import { URL } from '@/services/api-base-urls';

interface IProps {
  error?: string;
  name: string;
  setFieldValue: FormikValues['setFieldValue'];
  value: string | null;
  label: string;
  isThumbnail?: boolean;
  touched?: boolean;
}

const VideoUpload = ({
  name,
  error,
  setFieldValue,
  value,
  label,
  isThumbnail,
  touched,
}: IProps) => {
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

      setFieldValue(name, file.name as string);

      // toast.success('Image uploaded successfully!', {
      //   position: 'top-right',
      // });
    } catch (error) {
      toast.error('Image upload failed!', {
        position: 'top-right',
      });
    }
  };

  const isError = error && touched;
  const thumbnailVideoType = { 'video/mp4': ['.mp4', '.MP4'] };
  const thumbnailImgType = {
    'image/jpeg': [],
    'image/png': [],
    'image/pdf': [],
  };

  return (
    <>
      {imageSrc ? (
        <Dropzone
          onDrop={acceptedFiles => handleImageUpload(acceptedFiles)}
          accept={isThumbnail ? thumbnailImgType : thumbnailVideoType}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className={`${isError ? 'border-red' : 'border-gray-300'} border rounded-full w-fit h-fit`}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <PrismCard
                img={imageSrc}
                isUpload
              />
            </div>
          )}
        </Dropzone>
      ) : (
        <Dropzone
          onDrop={acceptedFiles => handleImageUpload(acceptedFiles)}
          accept={isThumbnail ? thumbnailImgType : thumbnailVideoType}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className='flex flex-col gap-y-1'
            >
              <p className='text-text-primary text-sm font-medium'>{label}</p>
              <div
                className={`flex gap-x-3 rounded-lg border-dashed bg-[#F9FAFB] flex-col gap-y-3 justify-center items-center w-full h-[220px] border ${isError ? 'border-red' : 'border-divider'}`}
              >
                <input {...getInputProps()} />
                <Image
                  alt=''
                  src={Upload}
                  width={64}
                  height={64}
                />
                <p className='text-text-secondary text-center'>
                  Click to upload or drag and drop
                </p>
                <div className='flex sm:gap-x-2 items-start'>
                  <Image
                    alt=''
                    src={Info}
                    width={24}
                    height={24}
                  />
                  <p className='text-center text-sm text-text-secondary'>
                    The video format must be a mp4 format. <br /> (Max. File
                    size: 25 MB)
                  </p>
                </div>
              </div>
            </div>
          )}
        </Dropzone>
      )}
    </>
  );
};

export default VideoUpload;
