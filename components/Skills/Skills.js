/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  // Unified tooltip icon — works for both string skills and {icon, name} objects
  const SkillIcon = ({ skill }) => {
    const src =
      typeof skill === "string" ? `/skills/${skill}.svg` : `/skills/${skill.icon}.svg`;
    const label = typeof skill === "string" ? skill : skill.name;

    return (
      <div className="group relative">
        <Image
          src={src}
          alt={label}
          width={50}
          height={50}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-1 text-sm text-white shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
          {label}
        </span>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      aria-label="Skills"
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h2>
            <p className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Continuously learning, building, and experimenting with modern
              technologies to create impactful solutions.{" "}
            </p>
          </div>

          {/* Languages & Tools */}
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {SKILLS.languagesAndTools.map((skill) => (
                <SkillIcon key={typeof skill === "string" ? skill : skill.icon} skill={skill} />
              ))}
            </div>
          </div>

          {/* Libraries & Frameworks */}
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <SkillIcon key={typeof skill === "string" ? skill : skill.icon} skill={skill} />
              ))}
            </div>
          </div>

          {/* Databases, AI & LLMs, Other — each as independent rows */}
          <div className="mt-10 staggered-reveal">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
              DATABASES
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu">
              {SKILLS.databases.map((skill) => (
                <SkillIcon key={typeof skill === "string" ? skill : skill.icon} skill={skill} />
              ))}
            </div>
          </div>

          <div className="mt-10 staggered-reveal">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
              AI & LLMs
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu">
              {SKILLS.aiAndLlms.map((skill) => (
                <SkillIcon key={typeof skill === "string" ? skill : skill.icon} skill={skill} />
              ))}
            </div>
          </div>

          <div className="mt-10 staggered-reveal">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
              OTHER
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu">
              {SKILLS.other.map((skill) => (
                <SkillIcon key={typeof skill === "string" ? skill : skill.icon} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;