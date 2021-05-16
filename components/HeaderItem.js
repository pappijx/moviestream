import Link from "next/link";

function HeaderItem({ Icon, title, path, itemsCount }) {
  return (
    <Link href={path}>
      <div className="relative flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">
          {title}
        </p>

        {title === "COLLECTION" ? (
          <span className="absolute group-hover:animate-bounce absolutePos">
            {itemsCount}
          </span>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}

export default HeaderItem;
