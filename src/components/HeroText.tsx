import { motion } from "framer-motion";
import { Button } from "./Button";
import { FaStar, FaDownload } from "react-icons/fa";
import Dialog from "../ui/dialog";

const HeroText = () => {
  return (
    <div className="snap container relative z-10 mx-auto flex min-h-screen max-w-screen-lg flex-col items-center justify-center text-white">
      <div className="flex translate-y-[-5rem] flex-col items-center lg:translate-y-[-8rem]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
          className="hero-text z-10 mt-40 flex flex-col items-center text-center text-5xl font-medium tracking-tight text-white lg:mt-60 lg:text-7xl"
        >
          <div className="mx-3 my-2 flex flex-col items-center justify-center gap-x-5 gap-y-2 md:my-0 md:flex-row">
            <div>Revolutionizing</div>
            <div className="rotation-container flex h-[3rem] items-center justify-center lg:h-[4.5rem]">
              <p>email</p>
              <p>tweet</p>
              <p>message</p>
              <p>comment</p>
            </div>
          </div>
          <div className="mx-3">responses with the power of AI</div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="z-10 mx-10 mt-6 mb-16 max-w-xl text-center text-[0.6rem] text-base text-slate-400 lg:text-lg"
        >
          Reworkd. is an AI powered application that uses advanced models to
          generate customizable responses based on a user&apos;s context and
          mood.
        </motion.p>
        <div className="flex flex-row gap-2">
          <motion.div
            initial={{ opacity: 0, x: -50, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="z-10"
          >
            <Button
              icon={<FaDownload />}
              className="bg-fuchsia-700 font-bold hover:bg-fuchsia-900"
            >
              Download
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="z-10"
          >
            <Dialog
              trigger={
                <Button
                  className="bg-white font-bold text-black hover:bg-gray-300"
                  icon={<FaStar />}
                >
                  Demo
                </Button>
              }
            >
              <div className="p-4">
                <h2 className="text-xl font-bold">Demo Content</h2>
                <p className="mt-2">This is a simplified demo of the Reworkd UI.</p>
              </div>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText; 