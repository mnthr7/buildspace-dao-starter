import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xf9bf88E85049DBA252cF34dd1b87CFc128506722",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Airpod Punk",
        description: "This NFT will give you access to AirpodDAO!",
        image: readFileSync("scripts/assets/AirpodPunk.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()