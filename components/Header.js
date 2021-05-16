import Image from "next/image";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import { useStateValue } from "../pages/stateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} path={"/"} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} path={"/"} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} path={"/"} />
        <HeaderItem
          title="COLLECTION"
          Icon={CollectionIcon}
          path={"/collections"}
          itemsCount={basket?.length}
        />
        <HeaderItem title="SEARCH" Icon={SearchIcon} path={"/"} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} path={"/"} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </div>
  );
}

export default Header;
