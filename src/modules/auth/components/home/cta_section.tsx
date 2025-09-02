import React from 'react';
import Button from '../button';
// import { Button } from '../../../components/button';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Bạn sẵn sàng tạo sự khác biệt?",
  description = "Hãy cùng chúng tôi lan tỏa yêu thương đến những mảnh đời còn khó khăn",
  primaryButtonText = "Đóng góp ngay",
  secondaryButtonText = "Trở thành tình nguyện viên",
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <div className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Tiêu đề */}
        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>

        {/* Mô tả */}
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Các nút hành động */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100"
            onClick={onPrimaryButtonClick}
          >
            {primaryButtonText}
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white hover:bg-white/10"
            onClick={onSecondaryButtonClick}
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};