import React from "react";
import "./Initiatives.css";

function Initiative7() {
  return (
    <div>
      <div className="description">
        <p className="Heading">
          RISC-V Software for Hardware Indigenization (RISHI){" "}
        </p>
        <p>
          Instruction Set Architecture or ISA, is the machine language of a
          computer, in which all its programs are expressed in. Two proprietary
          ISAs dominate the world today: x86 in the datacenter world and ARM in
          the mobile and embedded markets. As India aspires to build a
          self-sufficient semiconductor ecosystem from the ground up, these ISAs
          have two serious limitations:{" "}
        </p>
        <ul>
          <li>
            Building new hardware conforming to them requires paying licensing
            fees/royalties to the multinational companies that own them.{" "}
          </li>
          <li>
            It is not possible to add new custom instructions to the ISAs for
            differentiation purposes, since they are the intellectual property
            of their owners.
          </li>
        </ul>
        <p>
          RISC-V, the national ISA of India, is an open, free and customizable
          ISA, without the above limitations. In an era of geopolitical shifts,
          it is governed by a neutral non-profit organization and allows for
          free ISA customizations without any license requirements. It thereby
          enables open hardware development, in the same spirit as the
          open-source software movement. As a result, several academic and
          commercial organizations around the world have built a plethora of
          hardware designs on RISC-V. The ISA has gained a lot of traction in
          microcontrollers today. As higher performance designs are being
          developed by several startups now, it is only a matter of time before
          RISC-V gains significant market share in all computer classes, from
          wearables to servers.
        </p>
        <p>
          As India envisions self-reliance in semiconductors, this ISA
          transition to RISC-V offers three concurrent opportunities:
        </p>
        <ul>
          <li>
            Development of RISC-V based indigenous hardware ingredients, both as
            design IPs as well as fabricated chips.{" "}
          </li>
          <li>
            Development of RISC-V based systems using commercially available
            hardware ingredients, both from within the nation and around the
            world.
          </li>
          <li>
            Development of a strong software ecosystem for RISC-V to accelerate
            the creation and the adoption of the above two.
          </li>
        </ul>
        <p>
          While there is significant focus in India on the first two
          opportunities, hardware without software is akin to a body without
          mind. Hence, ITEL is interested in leveraging the large software
          developer and student communities in India to advance the software
          ecosystem for RISC-V. India must participate in{" "}
          <a href="https://riseproject.dev/">ongoing global efforts</a>
          in this direction as well as carve its own unique path by prioritizing
          software that can catalyze its hardware indigenization efforts (e.g.,
          software for feature phones, efficient UPI, Android application
          compatibility, etc.)
        </p>

        <p>
          Software and hardware are interdependent on each other and this
          “chicken and the egg” conundrum for RISC-V can be solved only with
          simultaneous development of both. Furthermore, building a software
          ecosystem requires the participation of a large number of developers.
          Hence, this technical initiative is early in its conception and poses
          the problem but does not offer solutions yet. If you are interested in
          this opportunity, please reach out to us to brainstorm and develop
          solutions together!
        </p>
      </div>
    </div>
  );
}

export default Initiative7;
