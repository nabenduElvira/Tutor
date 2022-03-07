import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "dfa1df50acd24388a8fcfb3c5122c14e";
const token =
  "006dfa1df50acd24388a8fcfb3c5122c14eIACRkiHNxE6TMULYOlVuhv0MLB6eiCxZIoLIr1gEKShFjH9ATBUAAAAAEAC7nPWLlp36YQEAAQCWnfph";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "tutor3";
