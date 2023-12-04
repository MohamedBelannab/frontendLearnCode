import React from "react";
import YouTube from "react-youtube";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function VideoModal({open ,selectedVideo , setOpen , opts}) {
 
  return (
    <>
      <Dialog open={open} handler={()=>{setOpen(!open)}}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          <div>
            <div className="video-player mt-4">
              {selectedVideo && (
                <YouTube videoId={selectedVideo.snippet.resourceId.videoId} opts={opts} />
              )}
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={()=>{setOpen(!open)}}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={()=>{setOpen(!open)}}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}