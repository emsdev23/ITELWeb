import React from "react";
import "./Initiatives.css";

function Initiative2() {
  return (
    <div>
      <div>
        <div className="description">
          <div className="herohead">
            Heating and Cooling: Towards Efficiency and Sustainability
            <br />
          </div>
          <div>
            <p className="Heading">The Global Challenge of Energy Use</p>
            <p>
              Across the globe, nearly{" "}
              <b>half of all electricity consumption </b>goes into heating and
              cooling—whether for homes, offices, industries, or data centers.
              This huge demand is currently powered mostly by{" "}
              <b>fossil fuels</b> such as coal, oil, and gas. While these
              sources have supported rapid development for decades, they also
              contribute heavily to <b>greenhouse gas (GHG) emissions </b>,
              accelerating climate change.
            </p>
            <p>
              What makes this even more concerning is that most existing heating
              and cooling systems are <b>not energy efficient</b> . When fossil
              fuels are burned directly, they produce 0.6 to 0.85 units of
              heating for a kWh equivalent of fossil-fuel energy. Similarly,
              when electricity is used for resistive heating, one unit of
              electricity produces at most 0.9 units of heat. Carnot cycle,
              where a refrigerant is compressed to generate heat and expanded to
              cool, can generate 4 to 5 units of heat and 4 to 5 units of
              cooling for every unit of electricity. If the output is fully
              utilised, 10 units of heating and cooling is realized using a unit
              (kWh) of electricity, implying a{" "}
              <b>Coefficient of Performance (COP)</b>
              of eight to ten. The Carnot cycle is used in heat-pumps and
              chillers, but here too mostly either heating or cooling is used
              throwing away the other to the atmosphere; this halves the COP, as
              in, for example, in a refrigerator or air-conditioner. To move
              away from climate change, we require a different approach, where
              the heating and cooling of a heat-pump and chiller are both
              utilised, maximising the effective COP. The challenge is to do
              this in a cost-effective manner, so that heating and cooling from
              green electricity becomes less costly than that from fossil fuels.
              The Carnot cycle is old and if this high-effective COP is not
              commonly used today, it is because the simultaneous use of heating
              and cooling was far more expensive than the cheap fossil fuels.
              The impact on climate change was never taken into account in
              economics.
            </p>
          </div>
          <br />
          <div>
            <p className="Heading">Transitioning to Green Electricity</p>
            <p>
              The world is now moving away from fossil fuels toward{" "}
              <b>renewable energy sources </b> such as solar, wind, and hydro
              power. This transition is crucial to cut down carbon emissions and
              build a sustainable energy future.
            </p>
            <p>
              However, switching to green electricity alone is not enough. If
              heating and cooling systems remain inefficient, we will still
              waste enormous amounts of precious renewable energy. That’s why
              <b>
                efficiency improvements and renewable adoption must go hand in
                hand
              </b>
              .
            </p>
          </div>
          <br />
          <div>
            <p className="Heading">
              Redefining Efficiency in Heating & Cooling (COP ≥ 6)
            </p>
            <p>
              Our project aims to{" "}
              <b>redefine how heating and cooling systems operate </b>. The goal
              is to achieve a{" "}
              <b>COP (Coefficient of Performance) of 6 or more </b>, compared to
              traditional electricity-based systems which are of{" "}
              <b>COP 0.8~0.9 </b>. where <b>1 unit of electricity</b> gives
              <b>0.8~0.9 units of heat</b>.
            </p>
            <div>
              <p>In simple terms:</p>
              <ul>
                <li>
                  COP tells us how much heating or cooling output we get per
                  unit of electricity consumed.
                </li>
                <li>
                  A COP of 6 means: with <b>1 unit of electricity </b>, the
                  system can deliver <b>6 units of heating or cooling energy</b>
                </li>
              </ul>
              <p>
                heating or cooling energy. This leap in efficiency can
                drastically reduce electricity demand, save costs, and make
                renewable energy usage more impactful. With higher efficiency,
                the same amount of renewable power can serve more people and
                industries, multiplying its benefits.
              </p>
              <p>
                Most of the applications fall under following temperature
                ranges,
              </p>
              <ul>
                <li>
                  -70 to 200°C - Domestic and partly commercial and industrial
                  applications.
                </li>
                <li>200°C to 500°C - Commercial applications.</li>
                <li>Above 500°C - Industrial applications.</li>
              </ul>
              <p>
                Significant part of heating and cooling energy is consumed in
                -70 to 200°C category. With simultaneous use of heating and
                cooling generated from a chiller or a heat pump, the energy
                requirement in this temperature range can be met with a very
                small amount of electricity This would go a long way in
                combatting climate change.
              </p>
            </div>
          </div>

          <br />

          <div>
            <p className="Heading">Revisiting the Carnot Cycle</p>
            <p>
              The <b>Carnot cycle </b>, a concept from classical thermodynamics,
              has long been recognized as the{" "}
              <b>most efficient cycle possible</b> for heat engines and
              refrigerators. Yet, in practice, Heat generation from fossil fuels
              is still prevalent.
            </p>
            <p>
              Why? Because fossil fuels were cheap and abundant, there was
              little incentive to push the boundaries of efficiency. Now, with
              climate change and energy sustainability as urgent priorities, the
              Carnot principle offers a{" "}
              <b>blueprint for next-generation systems</b>.
            </p>
            <p>
              Our effort takes inspiration from the Carnot cycle, exploring ways
              to build heating and cooling technologies that not only aim for
              higher COP values but are also highly efficient. We aim to build
              affordable subsystems with focus on green electricity for easy
              adaptation and sustainability.
            </p>
          </div>
          <br />
          <p className="subHeading">Academic Partners:​ </p>
          <ul>
            <li>
              <b>IIT Madras​ </b>
            </li>
            <li>
              <b>Plaksha college</b>
            </li>
            <li>
              <b>BITS Pilani</b>
            </li>
          </ul>

          <p className="subHeading">Industries Partners:​ </p>
          <ul>
            <li>
              <b>CEET​ </b>
            </li>
            <li>
              <b>ZedBee</b>
            </li>
            <li>
              <b>Flowtrik</b>
            </li>
            <li>
              <b>Element synergies</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Initiative2;
