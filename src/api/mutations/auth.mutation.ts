import { useMutation } from "@tanstack/vue-query";
import { authenticationService } from "..";

export const useAuthMutation = () => {
  return useMutation(authenticationService);
}