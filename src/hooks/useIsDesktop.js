import { useMediaQuery } from "react-responsive";

export default function useIsDesktop() {
  return useMediaQuery({
    query: "(min-width: 768px)",
  });
}
