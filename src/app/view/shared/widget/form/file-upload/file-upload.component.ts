// import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
// import { MessageService, PrimeNGConfig } from 'primeng/api';
// import { FileUploadModule } from 'primeng/fileupload';
// import { ButtonModule } from 'primeng/button';
// import { CommonModule } from '@angular/common';
// import { BadgeModule } from 'primeng/badge';
// import { HttpClientModule } from '@angular/common/http';
// import { ProgressBarModule } from 'primeng/progressbar';
// import { ToastModule } from 'primeng/toast';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-file-upload',
//   standalone: true,
//   imports: [FileUploadModule, ButtonModule, BadgeModule, ProgressBarModule, ToastModule, HttpClientModule, CommonModule, ReactiveFormsModule],
//   providers: [MessageService],
//   templateUrl: './file-upload.component.html',
//   styleUrl: './file-upload.component.css',
//   encapsulation: ViewEncapsulation.Emulated
// })
// export class FileUploadComponent implements OnChanges {
//   @Input() control: FormControl = new FormControl();
//   @Input() removeFiles: boolean = false;
//   otherFiles: FileItem[] = [];
//   files: FileItem[] = [];
//   images: any;
//   totalSize: number = 0;
//   totalSizePercent: number = 0;

//   constructor(private config: PrimeNGConfig, private messageService: MessageService) { }
//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['removeFiles']) {
//       if (this.removeFiles) {
//         this.removeAllFile();
//       }
//     }

//   }


//   choose(event: any, callback: () => void) {
//     callback();
//   }

//   uploadEvent(callback: () => void) {
//     callback();
//   } 
//   onTemplatedUpload() {
//     this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
//   }

//   onSelectedFiles(event: any) {
//     this.files = event.currentFiles;

//     this.files.forEach((file: File) => {
//       this.totalSize += parseInt(this.formatSize(file.size));
//     });
//     this.totalSizePercent = this.totalSize / 10;
//     this.control.setValue(this.files);
//     this.sortFiles();
//     console.log(this.files);
    
//   }
//   formatSize(bytes: any) {
//     const k = 1024;
//     const dm = 3;
//     const sizes = this.config.translation?.fileSizeTypes;
//     if (!sizes) {
//       return ''; // or return a default value if sizes is undefined
//     }

//     if ((bytes as number) === 0) {
//       return `0 ${sizes[0]}`;
//     }

//     const i = Math.floor(Math.log((bytes as number)) / Math.log(k));
//     const formattedSize = parseFloat(((bytes as number) / Math.pow(k, i)).toFixed(dm));

//     return `${formattedSize} ${sizes[i]}`;
//   }

//   sortFiles() {
//     this.images = this.files.filter(file => this.isImage(file));
//     this.otherFiles = this.files.filter(file => !this.isImage(file));
//     console.log('sort', this.images, this.otherFiles);

//   }
//   isImage(file: any): boolean {
//     return file.type.startsWith('image/');
//   }
//   removeAllFile() {
//     this.files.length = 0
//   }
//   onRemoveUploadedFile(event: any, file: File, index: number) {
//     // Remove the file from the uploadedFiles array
//     // this.files.splice(index, 1);

//     // If the file is an image, revoke the object URL
//     if (this.isImage(file)) {
//       this.images.splice(index, 1)
//       URL.revokeObjectURL((file as FileItem).objectURL);
//     }
//     if (!this.isImage(file)) {
//       this.otherFiles.splice(index, 1)
//     }
//     this.files = [...this.images, ...this.otherFiles]
//   }
// }


// export interface FileItem extends File {
//   objectURL: string;
// }
import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaxCharacterPipe } from '../../../../../pipes/max-character.pipe';
import { FileIconPipe } from '../../../../../pipes/file-icon.pipe';
import { FullScreenDirective } from '../../../../../directives/full-screen.directive';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FileUploadModule, ButtonModule, BadgeModule, ProgressBarModule, ToastModule, HttpClientModule, CommonModule, ReactiveFormsModule,MaxCharacterPipe,FileIconPipe,FullScreenDirective],
  providers: [MessageService],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class FileUploadComponent implements OnChanges {
  @Input() control: FormControl = new FormControl();
  @Input() removeFiles: boolean = false;
  otherFiles: FileItem[] = [];
  files: FileItem[] = [];
  images: any;
  videos:any;
  totalSize: number = 0;
  totalSizePercent: number = 0;

  constructor(private config: PrimeNGConfig, private messageService: MessageService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['removeFiles']) {
      if (this.removeFiles) {
        this.removeAllFile();
      }
    }
  }

  choose(event: any, callback: () => void) {
    callback();
  }

  uploadEvent(callback: () => void) {
    callback();
  }

  onTemplatedUpload() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  }

  onSelectedFiles(event: any) {
    this.files = event.currentFiles;
    this.files.forEach(file => {
      (file as FileItem).objectURL = URL.createObjectURL(file);
    });
    // this.files.forEach((file: File) => {
    //   this.totalSize += this.getSizeInMB(file.size);
    // });
    this.totalSizePercent = this.totalSize / 10;
    this.control.setValue(this.files);
    this.sortFiles();
    console.log(this.files);
  }

  // getSizeInMB(bytes: number): number {
  //   return parseFloat((bytes / (1024 * 1024)).toFixed(2)); // Convert bytes to MB and round to 2 decimal places
  // }

  formatSize(bytes: number): string {
    // const mb = this.getSizeInMB(bytes);
    // return `${mb} MB`;
    const kb = 1024;
  const mb = kb * kb;

  if (bytes < kb) {
    // If the size is less than 1 KB, display it in bytes
    return `${bytes} Bytes`;
  } else if (bytes < mb) {
    // If the size is less than 1 MB, display it in KB
    return `${(bytes / kb).toFixed(2)} KB`;
  } else {
    // Otherwise, display the size in MB
    return `${(bytes / mb).toFixed(2)} MB`;
  }
  }

  sortFiles() {
    this.images = this.files.filter(file => this.isImage(file));
    this.videos = this.files.filter(file => this.isVideo(file));
    this.otherFiles = this.files.filter(file =>( !this.isImage(file) && !this.isVideo(file)));
    console.log('sort', this.images, this.otherFiles,this.videos);
  }

  isImage(file: File): boolean {
    return file.type.startsWith('image/');
  }
isVideo(file:File):boolean{
  return file.type.startsWith('video/')
}
  removeAllFile() {
    this.files.length = 0;
  }

  onRemoveUploadedFile(event: any, file: File, index: number) {
    if (this.isImage(file)) {
      this.images.splice(index, 1);
      URL.revokeObjectURL((file as FileItem).objectURL);
    } else if(this.isVideo(file)){
      this.videos.splice(index, 1);
      URL.revokeObjectURL((file as FileItem).objectURL);
    } else {
      this.otherFiles.splice(index, 1);
    }
    this.files = [...this.images, ...this.otherFiles];
  } 
}

export interface FileItem extends File {
  objectURL: string;
}
