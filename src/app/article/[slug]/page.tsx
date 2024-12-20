import React from "react";
import Markdown from 'react-markdown'
const markdown = `# Web3 HackFest 2025
`

const page = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center relative">
      <div className="w-[80%]  flex flex-col gap-[60px] z-10">
        <div className="flex flex-col gap-5 mt-14 w-full">
          <p className="text-white text-[45px] text-center">
            Web3 HackFest 2025 - Khám phá tiềm năng công nghệ AI và Web3
          </p>
          <p className="text-center text-gray-400">technology</p>
          <p className="text-center text-gray-400">3 thg 12, 2024</p>
        </div>
        <div className="w-full ">
          <div className=" text-white text-[25px] w-[60%] text-center m-auto">
            Sự bùng nổ của công nghệ AI và Web3 đang mở ra những cơ hội đột phá
            chưa từng có.
          </div>
        </div>
        <img
            src="/article/article.webp"
            className="rounded-md h-[674px] w-full z-1"
            alt=""
          />
        

        <div className="text-white">

        <div>
  <h1>1. Hành trình phát triển của Got It AI</h1>
  <p>Got It AI được thành lập vào năm 2018, xuất phát từ một dự án nhỏ về AI của công ty Got It. Ban đầu, Got It hoạt động như một nền tảng chia sẻ kiến thức dưới dạng dịch vụ, tích lũy một lượng lớn dữ liệu hội thoại từ các chuyên gia để hỗ trợ người dùng trong học tập và công việc. Nhận thấy tiềm năng từ nguồn dữ liệu này, đội ngũ phát triển đã nảy ra ý tưởng xây dựng một chuyên gia AI có khả năng tư vấn tự động cho người dùng dựa trên dữ liệu sẵn có.</p>

  <p>Quá trình nghiên cứu và phát triển (R&D) bắt đầu từ năm 2018, với mục tiêu xây dựng các mô hình AI tiên tiến. Mặc dù chưa đạt được mục tiêu tạo ra một chuyên gia AI hoàn chỉnh, nhưng các mô hình này đã chứng minh hiệu quả vượt trội trong lĩnh vực chăm sóc khách hàng. Got It nhận ra rằng nhiều doanh nghiệp đang tiêu tốn đáng kể thời gian và chi phí để giải đáp thắc mắc của khách hàng. Ví dụ, trong lĩnh vực thương mại điện tử, 80% các cuộc trò chuyện giữa khách hàng và bộ phận chăm sóc khách hàng xoay quanh những vấn đề như sản phẩm không như mong đợi, quy trình hoàn tiền, hay thời gian giao hàng.</p>

  <p>Trước thực tế này, Got It AI ra đời với sứ mệnh giúp doanh nghiệp tạo ra chatbot chỉ sau một cú nhấp chuột, tự động hóa quá trình chăm sóc khách hàng một cách hiệu quả. Điều này không chỉ giảm tải công việc cho nhân viên, mà còn nâng cao trải nghiệm người dùng thông qua việc cung cấp thông tin nhanh chóng và chính xác.</p>

  <h1>2. Thành công trong việc huy động vốn</h1>
  <p>Với giải pháp đột phá trong lĩnh vực AI, Got It AI đã thu hút sự quan tâm của nhiều nhà đầu tư uy tín. Sau hai vòng gọi vốn, công ty đã huy động thành công 15 triệu USD. Ông Peter Relan, một nhà đầu tư từng hỗ trợ và tham gia vào hội đồng quản trị của Discord, đánh giá cao giải pháp của Got It AI như một trung tâm hỗ trợ tự động hoàn toàn.</p>

  <p>Sự thành công này không chỉ đến từ sản phẩm chất lượng, mà còn nhờ vào đội ngũ phát triển giàu kinh nghiệm và tâm huyết. Got It AI may mắn có sự góp sức của nhiều chuyên gia hàng đầu trong ngành công nghệ như Peter Relan, David - một trong những thành viên sáng lập của OpenFeint, cùng với nhà sáng lập Hùng Trần. Ngoài ra, công ty còn thu hút nhiều nhân tài trong lĩnh vực AI và học máy như Chandra Khatri, cựu lead scientist của Uber AI và Amazon Alexa, Amol Kelkar, cựu kỹ sư phần mềm từ Microsoft, và nhiều nhà nghiên cứu AI khác có bằng tiến sĩ từ các đại học hàng đầu như Stanford.</p>

  <h1>3. Tiềm năng ứng dụng AI trong kinh doanh và trải nghiệm người dùng</h1>
  <p>Got It AI không chỉ dừng lại ở việc cung cấp giải pháp chatbot cho doanh nghiệp. Công ty còn hướng tới việc ứng dụng AI để tối ưu hóa quy trình kinh doanh và nâng cao trải nghiệm người dùng trên toàn cầu. Bằng cách tự động hóa quá trình chăm sóc khách hàng, doanh nghiệp có thể tiết kiệm thời gian và chi phí, đồng thời cung cấp dịch vụ chất lượng cao hơn cho khách hàng.</p>

  <p>Hơn nữa, Got It AI còn giúp chatbot hiểu và nắm bắt nội dung của các câu hỏi thường gặp (FAQ) được lưu trữ trên những dịch vụ phổ biến như Zendesk. Thay vì khách hàng phải tìm kiếm câu hỏi phù hợp và đọc câu trả lời dài dòng, họ chỉ cần đặt câu hỏi cho chatbot được đào tạo bởi Got It AI và nhận được câu trả lời mong muốn trong tích tắc. Điều này không chỉ giúp xử lý FAQ nhanh chóng và chính xác, mà còn cho phép chatbot đọc hiểu nội dung của một trang web bất kỳ và trả lời các câu hỏi liên quan từ phía người dùng.</p>

  <h1>4. Tương lai phát triển của Got It AI</h1>
  <p>Với nền tảng vững chắc và sự hỗ trợ từ các nhà đầu tư uy tín, Got It AI đang tập trung nguồn lực để phát triển thị trường tại Mỹ. Công ty dành phần lớn số tiền huy động được cho công tác nghiên cứu và phát triển, cũng như xây dựng những chế độ, điều kiện làm việc tốt nhất cho các thành viên. Mục tiêu của Got It AI là tiếp tục tối ưu chất lượng sản phẩm, đảm bảo những phản hồi từ chatbot đến người dùng có độ chính xác cao nhất, đồng thời cải thiện giao diện và trải nghiệm người dùng để chatbot có thể được chỉnh sửa và tích hợp dễ dàng, ngay cả bởi những người không có chuyên môn về kỹ thuật.</p>

  <p>Sự thành công của Got It AI không chỉ là niềm tự hào của công ty, mà còn là minh chứng cho tiềm năng và khả năng sáng tạo của các startup công nghệ Việt Nam trên thị trường quốc tế. Với tầm nhìn dài hạn và chiến lược phát triển bền vững, Got It AI hứa hẹn sẽ tiếp tục mang đến những giải pháp AI đột phá, góp phần nâng cao hiệu quả kinh doanh và trải nghiệm người dùng trên toàn cầu.</p>
</div>

        </div>
      </div>
      <div className="  absolute top-[50] left-0  bg-blue-600 opacity-50 blur-3xl w-full  h-[300px] z-[0] "></div>

    </div>
  );
};

export default page;
