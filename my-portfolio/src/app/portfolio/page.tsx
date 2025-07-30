import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Giới thiệu bản thân</h1>
      <p className="mb-6 text-center max-w-xl">
        Xin chào! Mình là Ba, một lập trình viên yêu thích công nghệ và sáng tạo. 
        Mình thích học hỏi những điều mới và xây dựng các sản phẩm hữu ích cho cộng đồng.
      </p>
      <Image
        src="/images/tenor.gif" // Đặt ảnh cute vào thư mục public với tên này hoặc thay bằng ảnh bạn muốn
        alt="Ảnh cute"
        width={250}
        height={250}
        className="rounded-full shadow-lg mb-6"
      />
      <Link href="/">
        <p className="text-blue-500 hover:underline">Quay về trang chủ</p>
      </Link>
    </div>
  );
}