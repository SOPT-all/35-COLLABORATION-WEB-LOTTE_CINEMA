import S from "./MobileLayout.style";
import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <S.Wrapper role="main" aria-label="모바일 뷰">
      <S.Layout>{children}</S.Layout>
    </S.Wrapper>
  );
};

export default MobileLayout;
