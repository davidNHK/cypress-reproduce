import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useCallback, useState } from 'react';

import FileUpload from '../Upload/FileUpload.js';
import ImageComponent from './Image.js';

export default {
  component: ImageComponent,
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/MediaViewer/Image',
} as ComponentMeta<typeof ImageComponent>;

export const ImagePreviewWhenFileUpload: ComponentStory<
  typeof ImageComponent
> = args => {
  const [uploadedImg, setUploadedImg] = useState<{
    alt: string;
    src: string;
  } | null>(null);
  const uploadImg = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const [uploadFile]: FileList = event.target.files;
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        // convert image file to base64 string
        setUploadedImg({
          alt: uploadFile.name,
          src: reader.result as string,
        });
      },
      false,
    );
    reader.readAsDataURL(uploadFile);
  }, []);
  return (
    <div className={'tw-flex tw-flex-col'}>
      {uploadedImg && (
        <ImageComponent alt={uploadedImg.alt} src={uploadedImg.src} />
      )}
      <FileUpload data-testid={args['data-testid']} onChange={uploadImg}>
        Click and upload image here
      </FileUpload>
    </div>
  );
};
