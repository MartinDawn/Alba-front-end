import React from 'react';

// Định nghĩa type cho dữ liệu thống kê
export interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  title?: string;
  stats?: StatItem[];
  backgroundColor?: string;
  textColor?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  title = "Chúng tôi đã đạt được",
  stats = [
    { value: "50+", label: "Chiến dịch" },
    { value: "10,000+", label: "Người tham gia" },
    { value: "5 tỷ+", label: "Quyên góp" },
    { value: "100%", label: "Minh bạch" }
  ],
  backgroundColor = "bg-gray-50",
  textColor = "text-primary"
}) => {
  return (
    <div className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        {/* Tiêu đề section */}
        <h2 className={`text-3xl font-bold text-center mb-12 ${textColor}`}>
          {title}
        </h2>

        {/* Grid hiển thị các thống kê */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <p className={`text-4xl font-bold mb-2 ${textColor}`}>
                {stat.value}
              </p>
              <p className="text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};