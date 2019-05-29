import React, { Component } from 'react';
import * as S from './styles';
import { DeletableImagePreview, Button } from '..';

interface ImageUploaderProps {
  onChange(files: FileList): void;
  onDelete(): void;
  id: string;
  image?: File;
  isCoverImage?: boolean;
}

interface ImageUploaderState {
  onDraggingOver: boolean;
}

const prevent = (event: React.DragEvent<HTMLLabelElement>) => {
  event.preventDefault();
  event.stopPropagation();
};

export class ImageUploader extends Component<
  ImageUploaderProps,
  ImageUploaderState
> {
  constructor(props: ImageUploaderProps) {
    super(props);

    this.state = {
      onDraggingOver: false,
    };
  }

  handleChange = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length > 0) {
      const { onChange } = this.props;
      onChange(files);
    }
  }

  handleDragEnter = (event: React.DragEvent<HTMLLabelElement>) => {
    prevent(event);
    this.setState({ onDraggingOver: true });
  }

  handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    prevent(event);
    this.setState({ onDraggingOver: false });
  }

  handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    prevent(event);
    this.setState({ onDraggingOver: true });
  }

  handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    prevent(event);
    this.setState({ onDraggingOver: false });
    const {
      dataTransfer: { files },
    } = event;
    const { onChange } = this.props;
    onChange(files);
  }

  render() {
    const { onDelete, id, image, isCoverImage = false } = this.props;
    const { onDraggingOver } = this.state;

    const imageUploadableChild = isCoverImage ? (
      <>
        <Button content="사진 업로드" />
        <S.UploadExplain>또는 사진을 드래그하세요</S.UploadExplain>
      </>
    ) : (
      <>
        <S.PlusIcon />
        <S.UploadExplain>추가하기</S.UploadExplain>
      </>
    );

    const imageUploaderChild = image ? (
      <DeletableImagePreview onDelete={onDelete} image={image} />
    ) : (
      <S.ImageUploadable
        htmlFor={id}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        isCoverImage={isCoverImage}
        isActive={onDraggingOver}
      >
        <S.HiddenFileInput id={id} type="file" onChange={this.handleChange} />
        {imageUploadableChild}
      </S.ImageUploadable>
    );

    return <S.ImageUploader>{imageUploaderChild}</S.ImageUploader>;
  }
}
