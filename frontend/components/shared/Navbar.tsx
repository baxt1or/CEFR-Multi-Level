import Link from "next/link";

const links = [
  {
    href: "/",
    label: "HOME",
  },
  {
    href: "/",
    label: "TAKE CEFR",
  },
  {
    href: "/band-calculator",
    label: "CEFR BAND CALCULATOR",
  },
  {
    href: "/listening",
    label: "LISTENING",
    submenu: true,
    submenuLinks: [
      {
        href: "/listening",
        label: "CEFR Listening Practice Tests",
      },
      {
        href: "/listening/sections",
        label: "CEFR Listening Section Practices",
      },
    ],
  },
  {
    href: "/reading",
    label: "READING",
    submenu: true,
    submenuLinks: [
      {
        href: "/reading",
        label: "CEFR Reading Practice Tests",
      },
      {
        href: "/reading/sections",
        label: "CEFR Reading Section Practices",
      },
    ],
  },
  {
    href: "/writing",
    label: "WRITING",
    submenu: true,
    submenuLinks: [
      {
        href: "/writing",
        label: "CEFR Writing Lessons",
      },
    ],
  },
  {
    href: "/",
    label: "SPEAKING",
    submenu: true,
    submenuLinks: [
      {
        href: "/speaking",
        label: "CEFR Speaking Topic Questions and Answers",
      },
    ],
  },
  {
    href: "/",
    label: "CEFR INFO",
    submenu: true,
    submenuLinks: [
      {
        href: "/listening",
        label: "What is CEFR?",
      },
      {
        href: "/listening/sections",
        label: "Tips for CEFR",
      },
      {
        href: "/listening",
        label: "CEFR Vocabulary",
      },
      {
        href: "/listening/sections",
        label: "Advanced Vocabulary",
      },
      {
        href: "/listening/sections",
        label: "CEFR Grammar",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <header className="h-18 border-b w-full">
      <nav className="flex items-center justify-center gap-12 p-4">
        <div className="flex gap-12 items-center relative">
          {links.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                href={link.href}
                className="text-xs font-light text-muted-foreground hover:text-blue-500"
              >
                {link.label}
              </Link>

              {link.submenu && (
                <div className="absolute top-full left-0 hidden group-hover:block">
                  <div className="mt-4" />
                  <div className="flex flex-col gap-y-2 p-3 bg-white border border-gray-200 shadow-lg w-[210px]">
                    {link.submenuLinks.map((item) => (
                      <Link
                        href={item.href}
                        key={item.href}
                        className="hover:text-blue-500 text-xs font-light text-muted-foreground "
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
