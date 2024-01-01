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
        <DialogBody>
          <div>
            <div className="video-player  flex items-center justify-center">
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
        </DialogFooter>
      </Dialog>
    </>
  );
}