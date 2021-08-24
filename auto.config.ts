import { AutoRc } from "auto";

/** Auto configuration */
export default function rc(): AutoRc {
  return {
    plugins: ["git-tag", "conventional-commits"],
    owner: "poloagustin",
    repo: "auto-demo",
    name: "apolo",
    email: "poloagustin@gmail.com",
  };
}
