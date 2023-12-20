import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function DetailSection() {
  return (
    <div className="flex flex-col gap-[17px]">
      <div className="flex flex-row justify-center items-center border-b-[1px] border-light-grey mx-[195px] ">
        <div className="p-[24px] flex justify-center">
          <p className="font-[Montserrat] text-[14px] font-[700] text-md-grey">
            Description
          </p>
        </div>
        <div className="p-[24px] flex justify-center">
          <p className="font-[Montserrat] text-[14px] font-[700] text-md-grey">
            Additional Information
          </p>
        </div>
        <div className="p-[24px] flex justify-center gap-[10px]">
          <p className="font-[Montserrat] text-[14px] font-[700] text-md-grey">
            Reviews
          </p>
          <p className="font-[Montserrat] text-[14px] font-[700] text-green">
            (0)
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-around px-[195px] gap-[30px] items-start">
        <div className="flex-1 min-w-[316px]">
          <img src="/assets/unsplash-detail.png" alt="" />
        </div>
        <div className="flex flex-col flex-1 gap-[30px]">
          <h5 className=" font-[Montserrat] text-[19px] font-[700] text-dark-blue tracking-[0.1px]">
            the quick fox jumps over{" "}
          </h5>
          <h6 className=" font-[Montserrat] text-[14px] font-[400] text-md-grey tracking-[0.1px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. <br />
            <br /> Met minim Mollie non desert Alamo est sit cliquey dolor do
            met sent. RELIT official consequent door ENIM RELIT Mollie.
            Excitation venial consequent sent nostrum met. <br /> <br /> Met
            minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
        </div>

        <div className="flex flex-col flex-1 gap-[25px]">
          <div className="flex  flex-col gap-[30px]">
            <h5 className="font-[Montserrat] text-[19px] font-[700] text-dark-blue tracking-[0.1px]">
              the quick fox jumps over{" "}
            </h5>
            <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[20px]">
              <FontAwesomeIcon
                icon={faChevronRight}
                size="md"
                color="#737373"
              />
              <h5 className=" font-[Montserrat] text-[14px] font-[400] text-md-grey tracking-[0.1px]">the quick fox jumps over </h5>
            </div>
            <div className="flex flex-row gap-[20px]">
              <FontAwesomeIcon
                icon={faChevronRight}
                size="md"
                color="#737373"
              />
              <h5 className=" font-[Montserrat] text-[14px] font-[400] text-md-grey tracking-[0.1px]">the quick fox jumps over </h5>
            </div>
            <div className="flex flex-row gap-[20px]">
              <FontAwesomeIcon
                icon={faChevronRight}
                size="md"
                color="#737373"
              />
              <h5 className=" font-[Montserrat] text-[14px] font-[400] text-md-grey tracking-[0.1px]">the quick fox jumps over </h5>
            </div>
            <div className="flex flex-row gap-[20px]">
              <FontAwesomeIcon
                icon={faChevronRight}
                size="md"
                color="#737373"
              />
              <h5 className=" font-[Montserrat] text-[14px] font-[400] text-md-grey tracking-[0.1px]">the quick fox jumps over </h5>
            </div>
            </div>
          </div>
          <div className="flex  flex-col gap-[30px]">
            <h5 className=" font-[Montserrat] text-[19px] font-[700] text-dark-blue tracking-[0.1px]">
              the quick fox jumps over{" "}
            </h5>
            <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[20px]">
              <FontAwesomeIcon
                icon={faChevronRight}
                size="md"
                color="#737373"
              />
              <h5 className=" font-[Montserrat] text-[14px] font-[400] text-md-grey tracking-[0.1px]">the quick fox jumps over </h5>
            </div>
            <div className="flex flex-row gap-[20px]">
              <FontAwesomeIcon
                icon={faChevronRight}
                size="md"
                color="#737373"
              />
              <h5 className=" font-[Montserrat] text-[14px] font-[400] text-md-grey tracking-[0.1px]">the quick fox jumps over </h5>
            </div>
            <div className="flex flex-row gap-[20px]">
              <FontAwesomeIcon
                icon={faChevronRight}
                size="md"
                color="#737373"
              />
              <h5 className=" font-[Montserrat] text-[14px] font-[400] text-md-grey tracking-[0.1px]">the quick fox jumps over </h5>
            </div>
            <div className="flex flex-row gap-[20px]">
              <FontAwesomeIcon
                icon={faChevronRight}
                size="md"
                color="#737373"
              />
              <h5 className=" font-[Montserrat] text-[14px] font-[400] text-md-grey tracking-[0.1px]">the quick fox jumps over </h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
