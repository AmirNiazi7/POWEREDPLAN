import svgPaths from "./svg-umq2vquwfd";
import imgCopyOfPoweredplansLogoTealRgb900PxW72Ppi11 from "figma:asset/648de602489b2ace2b5a3c07cdd36e9c813c9482.png";
import imgFrame2147227332 from "figma:asset/b97ab851ce83675e5cfb5fb7aee6fb1102e57b43.png";

function Frame() {
  return <p className="font-['Quicksand:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#008236] text-[12px] text-nowrap">On Track</p>;
}

function HeroSection() {
  return (
    <div className="absolute h-[1024px] left-0 top-0 w-[1440px]" data-name="Hero Section">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1024">
        <g id="Hero Section">
          <g clipPath="url(#clip0_1_361)">
            <rect fill="var(--fill-0, #F9F9FC)" height="1024" rx="20" width="1440" />
            <line id="Line 2" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="1.00831" x1="17.5664" x2="299.566" y1="927.881" y2="927.881" />
            <g id="Frame 2085664071"></g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_361">
            <rect fill="white" height="1024" rx="20" width="1440" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <HeroSection />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[973px] left-[16.71px] top-[24.2px] w-[282px]" data-name="Component 4">
      <div className="absolute inset-[-4.56%_-15.73%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(231, 231, 231, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370.732 1061.73">
          <g filter="url(#filter0_d_1_372)" id="Component 4">
            <rect fill="var(--fill-0, white)" height="973" rx="12.13" width="282" x="44.3658" y="44.3658" />
            <rect height="971.925" rx="11.5926" stroke="var(--stroke-0, #E7E7E7)" strokeWidth="1.07472" width="280.925" x="44.9032" y="44.9032" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1061.73" id="filter0_d_1_372" width="370.732" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="22.1829" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_372" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_372" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12.1px] items-center p-[24px] relative w-full">
          <div className="h-[26.688px] relative shrink-0 w-[240.193px]" data-name="Copy of poweredplans-logo-teal-rgb-900px-w-72ppi (1) 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCopyOfPoweredplansLogoTealRgb900PxW72Ppi11} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LucideLayoutDashboard() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/layout-dashboard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/layout-dashboard">
          <g id="Vector">
            <path d={svgPaths.p13b4cd00} stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p32939e80} stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pdc9c900} stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p20de0972} stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Inner() {
  return (
    <div className="basis-0 content-stretch flex gap-[7px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Inner">
      <LucideLayoutDashboard />
      <div className="basis-0 flex flex-col font-['Quicksand:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[#239d99] text-[18px]">
        <p className="leading-[normal]">Dashboard</p>
      </div>
    </div>
  );
}

function NavItem() {
  return (
    <div className="bg-[rgba(35,157,153,0.1)] relative rounded-[8px] shrink-0 w-[240px]" data-name="Nav item 6">
      <div className="content-stretch flex items-center overflow-clip pl-[15.13px] pr-[16.133px] py-[12.1px] relative rounded-[inherit] w-full">
        <Inner />
      </div>
      <div aria-hidden="true" className="absolute border border-[#239d99] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240.76px]">
      <NavItem />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p367e9400} id="Vector_3" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p42b7400} id="Vector_4" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Inner1() {
  return (
    <div className="content-stretch flex gap-[9.823px] items-start relative shrink-0 w-[109px]" data-name="Inner">
      <Icon />
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#444] text-[18px] text-nowrap">
        <p className="leading-[normal]">My Child</p>
      </div>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex h-[45px] items-center overflow-clip px-[16.133px] py-[12.1px] relative rounded-[99.823px] shrink-0 w-[240px]" data-name="Nav item 6">
      <Inner1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d728000} id="Vector_3" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Inner2() {
  return (
    <div className="content-stretch flex gap-[7.546px] items-start relative shrink-0" data-name="Inner">
      <Icon1 />
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative self-stretch shrink-0 text-[#444] text-[18px] w-[174.321px]">
        <p className="leading-[normal]">{`Goals & Progress`}</p>
      </div>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="content-stretch flex h-[44px] items-center overflow-clip pl-[18px] pr-[16.133px] py-[12.1px] relative rounded-[99.823px] shrink-0 w-[240px]" data-name="Nav item 8">
      <Inner2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2469b00} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3eef23d2} id="Vector_2" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 11H16" id="Vector_3" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 16H16" id="Vector_4" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 11H8.01" id="Vector_5" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 16H8.01" id="Vector_6" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Inner3() {
  return (
    <div className="content-stretch flex gap-[7.546px] items-start relative shrink-0" data-name="Inner">
      <Icon2 />
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#444] text-[18px] text-nowrap">
        <p className="leading-[normal]">{`Surveys & Input`}</p>
      </div>
    </div>
  );
}

function NavItem5() {
  return (
    <div className="content-stretch flex h-[44px] items-center overflow-clip pl-[18px] pr-[16.133px] py-[12.1px] relative rounded-[99.823px] shrink-0 w-[240px]" data-name="Nav item 11">
      <Inner3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Inner4() {
  return (
    <div className="basis-0 content-stretch flex gap-[9.823px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Inner">
      <Icon3 />
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#444] text-[18px] text-nowrap">
        <p className="leading-[normal]">Meetings</p>
      </div>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="content-stretch flex h-[45px] items-center overflow-clip px-[16.133px] py-[12.1px] relative rounded-[99.823px] shrink-0 w-[240px]" data-name="Nav item 9">
      <Inner4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p145249c0} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p19581400} id="Vector_2" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Inner5() {
  return (
    <div className="basis-0 content-stretch flex gap-[9.823px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Inner">
      <Icon4 />
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#444] text-[18px] text-nowrap">
        <p className="leading-[normal]">Notifications</p>
      </div>
    </div>
  );
}

function NavItem6() {
  return (
    <div className="content-stretch flex h-[45px] items-center overflow-clip px-[16.133px] py-[12.1px] relative rounded-[99.823px] shrink-0 w-[240px]" data-name="Nav item 12">
      <Inner5 />
    </div>
  );
}

function LucideSettings() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/settings">
          <path d={svgPaths.pc4ac980} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Inner6() {
  return (
    <div className="content-stretch flex gap-[9.93px] items-center relative shrink-0 w-[177px]" data-name="Inner">
      <LucideSettings />
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#444] text-[18px] text-nowrap">
        <p className="leading-[normal]">{`Settings & profile`}</p>
      </div>
    </div>
  );
}

function NavItem8() {
  return (
    <div className="content-stretch flex h-[43px] items-center overflow-clip pl-[17.97px] pr-[13.972px] py-[10.479px] relative rounded-[86.449px] shrink-0 w-[240px]" data-name="Nav item 9">
      <Inner6 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p22ad0400} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Inner7() {
  return (
    <div className="content-stretch flex gap-[9.93px] items-center relative shrink-0 w-[177px]" data-name="Inner">
      <Icon5 />
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#444] text-[18px] text-nowrap">
        <p className="leading-[normal]">Documents</p>
      </div>
    </div>
  );
}

function NavItem7() {
  return (
    <div className="content-stretch flex h-[43px] items-center overflow-clip pl-[17.97px] pr-[13.972px] py-[10.479px] relative rounded-[86.449px] shrink-0 w-[240px]" data-name="Nav item 13">
      <Inner7 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <NavItem6 />
      <NavItem8 />
      <NavItem7 />
    </div>
  );
}

function LucideLogOut() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/log-out">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/log-out">
          <path d={svgPaths.p2b069980} id="Vector" stroke="var(--stroke-0, #B2585B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Inner8() {
  return (
    <div className="content-stretch flex gap-[9.93px] items-center relative shrink-0 w-[177px]" data-name="Inner">
      <LucideLogOut />
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b2585b] text-[18px] text-nowrap">
        <p className="leading-[normal]">Logout</p>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="content-stretch flex h-[43px] items-center overflow-clip pl-[17.97px] pr-[13.972px] py-[10.479px] relative rounded-[86.449px] shrink-0 w-[240px]" data-name="Nav item 10">
      <Inner8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col h-[424px] items-start justify-between relative shrink-0">
      <Frame25 />
      <NavItem4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[700px] items-center relative shrink-0">
      <NavItem1 />
      <NavItem2 />
      <NavItem5 />
      <NavItem3 />
      <Frame8 />
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24.2px] grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Main">
      <Frame1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1.01px_0_0_0]" style={{ "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 282 1.00831">
            <line id="Line 1" stroke="var(--stroke-0, #E2E8F0)" strokeWidth="1.00831" x2="282" y1="0.504157" y2="0.504157" />
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[973px] items-start left-[16.71px] top-[24.2px] w-[282px]">
      <Top />
      <Main />
    </div>
  );
}

function Main1() {
  return <div className="basis-0 grow min-h-px min-w-px shrink-0 w-full" data-name="Main" />;
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-end justify-center min-h-px min-w-px relative shrink-0 w-full z-[2]">
      <Main1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[81px] ml-0 mt-0 relative rounded-[10.13px] w-[1084px]" data-name="Component 5">
      <div className="content-stretch flex flex-col gap-[24.2px] isolate items-end justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e7e7] border-[1.075px] border-solid inset-0 pointer-events-none rounded-[10.13px] shadow-[0px_0px_44.366px_0px_rgba(0,0,0,0.07)]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[0.16px] top-[-0.11px] w-[509px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#0f172b] text-[20px] w-full">Welcome, Ms. Smith</p>
      <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#45556c] text-[14px] w-full">Submit weekly progress reports for your assigned students.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[grid-area:1_/_1] h-[45.031px] ml-0 mt-0 relative w-[509.633px]">
      <Frame18 />
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[17px] mt-[calc(50%-22.52px)] place-items-start relative">
      <Frame17 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Component1 />
      <Group10 />
    </div>
  );
}

function LucideBell() {
  return (
    <div className="h-[18.735px] relative shrink-0 w-[18.911px]" data-name="lucide/bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9109 18.7352">
        <g id="lucide/bell">
          <path d={svgPaths.p29b91c80} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.56127" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f3f3f5] content-stretch flex flex-col items-center justify-center ml-0 mt-0 px-[16.241px] py-[11.673px] relative rounded-[26px] size-[52px]">
      <LucideBell />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-[57.143px] shrink-0 size-[44px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[57.143px] size-full" src={imgFrame2147227332} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium items-start leading-[normal] relative shrink-0 w-[112px]">
      <p className="min-w-full relative shrink-0 text-[#444] text-[16px] w-[min-content]">Amir Niazi</p>
      <p className="relative shrink-0 text-[#636363] text-[14px] text-center text-nowrap">amir@gmail.com</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[11.857px] items-center ml-[92.06px] mt-[2.5px] relative w-[195.82px]">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <Frame7 />
      <div className="[grid-area:1_/_1] flex h-[28.274px] items-center justify-center ml-[73.89px] mt-[10.36px] relative w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[28.274px]">
            <div className="absolute inset-[-0.91px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.2739 0.912063">
                <line id="Line 5" stroke="var(--stroke-0, #CECECE)" strokeWidth="0.912063" x2="28.2739" y1="0.456031" y2="0.456031" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[764.74px] mt-[13.22px] place-items-start relative">
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group3 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute left-[243.18px] size-[53.619px] top-[-0.07px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.6191 53.6191">
        <g id="Group 2085664082">
          <circle cx="26.8096" cy="26.8096" fill="var(--fill-0, #239D99)" fillOpacity="0.1" id="Ellipse 1" r="26.8096" />
          <g id="Icon">
            <path d={svgPaths.p1d3e7280} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p170c15a0} id="Vector_2" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p18384180} id="Vector_3" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2b466a00} id="Vector_4" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[grid-area:1_/_1] h-[82.426px] ml-0 mt-0 relative w-[296.785px]">
      <div className="absolute flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] left-[0.1px] text-[#444] text-[18px] text-nowrap top-[12.37px] translate-y-[-50%]">
        <p className="leading-[normal]">Active Goals</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] left-[0.1px] not-italic text-[#444] text-[24px] text-nowrap top-[56.87px] translate-y-[-50%]">
        <p className="leading-[normal]">2</p>
      </div>
      <Group5 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame9 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col h-[65px] items-start relative shrink-0">
      <Group8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[138px] items-center justify-center p-[13px] relative rounded-[15.6px] shrink-0 w-[349px]">
      <Frame14 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute left-[241.79px] size-[53.619px] top-[0.03px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.6191 53.6191">
        <g id="Group 2085664082">
          <circle cx="26.8096" cy="26.8096" fill="var(--fill-0, #239D99)" fillOpacity="0.1" id="Ellipse 1" r="26.8096" />
          <g id="Icon">
            <path d={svgPaths.p315ce880} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3a5c6700} id="Vector_2" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M24.8086 24.8105H22.8086" id="Vector_3" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M30.8086 28.8105H22.8086" id="Vector_4" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M30.8086 32.8105H22.8086" id="Vector_5" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[grid-area:1_/_1] h-[75.078px] ml-0 mt-0 relative w-[296px]">
      <div className="absolute flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] left-[-0.41px] text-[#444] text-[18px] text-nowrap top-[24.46px] translate-y-[-50%]">
        <p className="leading-[normal]">On Track</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] left-[-0.41px] not-italic text-[#444] text-[24px] text-nowrap top-[56.96px] translate-y-[-50%]">
        <p className="leading-[normal]">3</p>
      </div>
      <Group6 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[138px] items-center justify-center p-[13px] relative rounded-[15.6px] shrink-0 w-[349px]">
      <Group9 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute left-[241.79px] size-[53.619px] top-[11.19px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.6191 53.6191">
        <g id="Group 2085664082">
          <circle cx="26.8096" cy="26.8096" fill="var(--fill-0, #239D99)" fillOpacity="0.1" id="Ellipse 1" r="26.8096" />
          <g id="Icon">
            <path d={svgPaths.p16049000} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3dc6b180} id="Vector_2" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[86px] relative shrink-0 w-[296px]">
      <div className="absolute flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#444] text-[18px] text-nowrap top-[23.5px] translate-y-[-50%]">
        <p className="leading-[normal]">Needs Attention</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] left-0 not-italic text-[#444] text-[24px] text-nowrap top-[68.13px] translate-y-[-50%]">
        <p className="leading-[normal]">1</p>
      </div>
      <Group7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[138px] items-center justify-center p-[13px] relative rounded-[15.6px] shrink-0 w-[349px]">
      <Frame16 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-0 top-0 w-[1084px]">
      <Group4 />
      <Frame13 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27px] relative shrink-0 w-[308.344px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[27px] left-[0.19px] not-italic text-[#444] text-[18px] text-nowrap top-[0.49px]">Action Items</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[21px] relative shrink-0 w-[53.75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[27.19px] not-italic text-[#239d99] text-[14px] text-center text-nowrap top-[-0.01px] translate-x-[-50%]">View All</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[27px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Button />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.25%_7.15%_8.41%_9.52%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p7206a80} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.58%_36.32%_41.76%_38.68%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 4">
            <path d={svgPaths.p207459c0} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(35,157,153,0.1)] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-[0.19px] text-[#0f172b] text-[14px] text-nowrap top-[-0.01px]">Complete Home Behavior Survey</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[16px] left-[0.19px] text-[#45556c] text-[12px] text-nowrap top-[-0.51px]">Due Dec 20, 2025</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[259.617px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#239d99] h-[36px] relative rounded-[8px] shrink-0 w-[63.086px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Medium',sans-serif] font-medium leading-[20px] left-[32.19px] text-[14px] text-center text-nowrap text-white top-[7.99px] translate-x-[-50%]">View</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[70px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container3 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.25%_7.15%_8.41%_9.52%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p7206a80} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.25%_48.82%_50.08%_51.18%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.58%_48.77%_33.42%_51.18%]" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(35,157,153,0.1)] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-[0.19px] text-[#0f172b] text-[14px] text-nowrap top-[-0.01px]">Review Progress Summary</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[16px] left-[0.19px] text-[#45556c] text-[12px] text-nowrap top-[-0.51px]">New update available</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[36px] relative shrink-0 w-[217.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#239d99] h-[36px] relative rounded-[8px] shrink-0 w-[63.086px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Medium',sans-serif] font-medium leading-[20px] left-[32.19px] text-[14px] text-center text-nowrap text-white top-[7.99px] translate-x-[-50%]">View</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[70px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container7 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.25%_65.48%_75.08%_34.52%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.25%_32.15%_75.08%_67.85%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.58%_11.32%_8.42%_13.68%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p3b86be00} id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.58%_11.32%_58.42%_13.68%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
            <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #239D99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(35,157,153,0.1)] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-[0.19px] text-[#0f172b] text-[14px] text-nowrap top-[-0.01px]">Upcoming IEP Meeting</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[16px] left-[0.19px] text-[#45556c] text-[12px] text-nowrap top-[-0.51px]">Jan 15, 2026 at 2:00 PM</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[36px] relative shrink-0 w-[190.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#239d99] h-[36px] relative rounded-[8px] shrink-0 w-[63.086px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Medium',sans-serif] font-medium leading-[20px] left-[32.19px] text-[14px] text-center text-nowrap text-white top-[7.99px] translate-x-[-50%]">View</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[70px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container11 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Dashboard">
      <Container4 />
      <Container8 />
      <Container12 />
    </div>
  );
}

function StudentsList() {
  return (
    <div className="bg-white h-[351px] relative rounded-[14px] shrink-0 w-full" data-name="StudentsList">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Container />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[308.344px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[27px] left-[0.19px] not-italic text-[#444] text-[18px] text-nowrap top-[0.49px]">Progress Snapshot</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[53.75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[27.19px] not-italic text-[#239d99] text-[14px] text-center text-nowrap top-[-0.01px] translate-x-[-50%]">View All</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[27px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Button4 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[159.758px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] text-nowrap top-0">Reading Comprehension</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[26px]">75%</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="basis-0 bg-[#dcfce7] grow h-[22px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Quicksand:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#008236] text-[12px] text-nowrap">On Track</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[22px] relative shrink-0 w-[102.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text1 />
        <Badge />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Container14 />
    </div>
  );
}

function Container16() {
  return <div className="bg-[#239d99] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col h-[8px] items-start overflow-clip pl-[-199.25px] pr-[199.25px] py-0 relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[38px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <PrimitiveDiv />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[140.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] text-nowrap top-0">Math Problem Solving</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[27px]">60%</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="basis-0 bg-[#dcfce7] grow h-[22px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Quicksand:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#008236] text-[12px] text-nowrap">On Track</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[22px] relative shrink-0 w-[103.633px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text3 />
        <Badge1 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return <div className="bg-[#239d99] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv1() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col h-[8px] items-start overflow-clip pl-[-318.8px] pr-[318.8px] py-0 relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[38px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73.414px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] text-nowrap top-0">Social Skills</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[26px]">45%</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="basis-0 bg-[#fef3c6] grow h-[22px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Quicksand:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#bb4d00] text-[12px] text-nowrap">Needs Attention</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[22px] relative shrink-0 w-[142.383px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text5 />
        <Badge2 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return <div className="bg-[#239d99] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv2() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col h-[8px] items-start overflow-clip pl-[-438.35px] pr-[438.35px] py-0 relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[38px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <PrimitiveDiv2 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[102.211px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] text-nowrap top-0">Communication</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.758px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-0 w-[27px]">80%</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="basis-0 bg-[#dcfce7] grow h-[22px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <Frame />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[22px] relative shrink-0 w-[103.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text7 />
        <Badge3 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return <div className="bg-[#239d99] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv3() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex flex-col h-[8px] items-start overflow-clip pl-[-159.4px] pr-[159.4px] py-0 relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[38px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <PrimitiveDiv3 />
    </div>
  );
}

function Dashboard1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0 w-[1034px]" data-name="Dashboard">
      <Container17 />
      <Container21 />
      <Container25 />
      <Container29 />
    </div>
  );
}

function StudentsList1() {
  return (
    <div className="bg-white h-[351px] relative rounded-[14px] shrink-0 w-full" data-name="StudentsList">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Container13 />
          <Dashboard1 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[18px] grow items-start min-h-px min-w-px relative shrink-0">
      <StudentsList />
      <StudentsList1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <Frame24 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex h-[458px] items-start left-[0.47px] top-[257.78px] w-[1084px]">
      <Frame26 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[grid-area:1_/_1] h-[714.197px] ml-0 mt-0 relative w-[1084px]">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[318.71px] top-[24.2px] w-[1084.063px]">
      <Group11 />
    </div>
  );
}

export default function Group12() {
  return (
    <div className="relative size-full">
      <Group />
      <Component />
      <Frame23 />
      <Frame22 />
    </div>
  );
}