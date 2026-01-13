import form from "../../assets/form.png"

function CMT() {
  return (
    <div className="flex-1 flex justify-center items-start mt-[150px] lg:mt-[100px]">
      <div className="flex flex-col items-center justify-center gap-[22px] lg:gap-[50px]">
        <div className="flex flex-col gap-[24px] items-center justify-center">
          <h1 className="font-bakbak text-[40px] lg:text-[80px] leading-[28px] lg:leading-[60px] text-[#74CFFB]">Feedback</h1>
          <p className="font-inter text-[16px] lg:text-[32px] leading-[28px] lg:leading-[36px] text-white">각 팀에 대한 피드백을 남겨주세요</p>
        </div>
        <a href="https://forms.gle/3hpbVFAaaUVTLFQ29" className=" flex items-center justify-center w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] rounded-[30px] bg-[#74CFFB]">
          <img src={form} alt="form" className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]" />
        </a>
      </div>
    </div>
    
    

  );
}

export default CMT;
