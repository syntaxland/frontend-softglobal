import React from "react";
// import { Spinner } from "react-bootstrap";
import {
    // CircleLoader,
    // BeatLoader,
    // BounceLoader,
    ClipLoader,
  // FadeLoader,
    // GridLoader,
  //   HashLoader, 
  //   PropagateLoader,
  //   PulseLoader,
    // RingLoader,
  //   RiseLoader,
  //   ScaleLoader,
    // SyncLoader,
    // RotateLoader,
} from "react-spinners";
function Loader() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-5">
        <span className="visually-hidden">Loading...</span>

        {/* from react-bootstrap */}
        {/* <Spinner annimation='border' variant='primary' size='lg' />  */}

        {/* from react-spinners */}
        {/* <CircleLoader color="blue" size={50} /> */}
      {/* <BounceLoader color="blue" size={50} /> */}
        {/* <BeatLoader color="blue" size={50} /> */}
        <ClipLoader color="blue" size={50} /> 

        
      {/* <p>BeatLoader...<BeatLoader color="#ff0000" size={50} /></p><br /> */}
      {/* <RotateLoader color="#ff0000" size={50} /> */}
      {/* <SyncLoader color="blue" size={50} /> */}
      {/* <ScaleLoader color="#ff0000" size={50} /> */}
      {/* <RiseLoader color="#ff0000" size={50} /> */}
      {/* <RingLoader color="#ff0000" size={50} /> */}
      {/* <PulseLoader color="#ff0000" size={50} /> */}
      {/* <PropagateLoader color="#ff0000" size={50} /> */}
      {/* <HashLoader color="#ff0000" size={50} /> */}
      {/* <GridLoader color="#ff0000" size={50} /> */}
      {/* <FadeLoader color="#ff0000" size={50} />
      */}
      </div>
    </>
  );
}

export default Loader;
