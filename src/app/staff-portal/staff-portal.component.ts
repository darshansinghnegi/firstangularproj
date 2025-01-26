import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-staff-portal',
  templateUrl: './staff-portal.component.html',
  styleUrls: ['./staff-portal.component.css']
})
export class StaffPortalComponent {

  constructor(private route:Router){}

  shiftDetails = { shift: 'Morning', days: 'Mon-Fri' };
  triggerObservable: Subject<void> = new Subject<void>();
  
  // Store captured image
  public webcamImage: any;

  // Handle the image captured from webcam
  handleImage(webcamImage: any) : void {
    // this.webcamImage = webcamImage;
    console.log('Captured image', webcamImage);
  }

  capture(): void {
    const formData = new FormData();
  
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
  
    canvas.toBlob((blob) => {
      if (blob) {
        formData.append('file', blob, 'capture.png');
        
      }
    }, 'image/png');  
  }

  markAttendance() {
    // Logic to send the captured image and timestamp to the backend
    console.log('Attendance marked', this.webcamImage);
  }

  logout(){
    this.route.navigate(['login'])
  }


  ngOnInit(): void {
    this.initializeCamera();
  }

  ngOnDestroy(): void {
    this.stopCamera();
  }
  public videoElement: any;
  private mediaStream: any;

  private async initializeCamera(): Promise<void> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.mediaStream = stream;
      this.videoElement = document.querySelector('video');
      this.videoElement.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera: ', error);
    }
  }

  // Stop the camera when component is destroyed
  private stopCamera(): void {
    if (this.mediaStream) {
      const tracks = this.mediaStream.getTracks();
      tracks.forEach((track: { stop: () => any; }) => track.stop());
    }
  }
  @ViewChild('canvas', { static: false }) canvasRef: any;

  capturePhoto(): void {
    this.showcamera=false
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');
    if (context) {
      // Set canvas size equal to video size
      canvas.width = this.videoElement.videoWidth;
      canvas.height = this.videoElement.videoHeight;
  
      // Draw the current frame from the video to the canvas
      context.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
    } else {
      console.error('Failed to get 2d context');
    }
  }
  showcamera:boolean=true

}
