import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IFileUpload } from './interfaces';
import UploadFileIcon from '../Icons/UploadFile';

import * as S from './styles';

const FileUpload = ({ maxFiles, maxSize, accept, onUploadFiles, onAcceptedFiles, onRejectedFiles,  ...props }: IFileUpload) => {
  const maxFileSize = maxSize * 1000000;
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject, 
    open
  } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles: maxFiles,
    maxSize: maxFileSize,
    accept: accept,
    onDrop: files => {
      setIsDragging(false);
      onUploadFiles(files);
    },
    onDropAccepted: acceptedFiles => { 
      onAcceptedFiles(acceptedFiles);
    },
    onDropRejected: rejectedFiles => { 
      onRejectedFiles(rejectedFiles);
    },
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  });
 
  return (
    <section className="container">
      <S.Container {...getRootProps({ isDragActive, isDragAccept, isDragReject, isDragging })}>
        <input {...getInputProps()} />
        <UploadFileIcon color={'#00E394'} />
        <S.Span>Drag files here or <S.LinkButton variant="link" onClick={open}>browse computer</S.LinkButton></S.Span>
      </S.Container> 
      <S.Helper>
        Upload files up to {maxSize}MB. Accepted files: {accept}.
      </S.Helper>
    </section>
  );
};

export default FileUpload;