import React from "react";
import Container from "@components/Container";
import Nav from "@components/Nav";

const Header = () => {
  return (
    <header className="relative py-5 border-b-2 border-[#233d61] border-solid">
      <Container>
          <div className="flex justify-between items-center">
              <div className="prose prose-2xl font-bold text-[#233d61]">Ahsoka Tano</div>
              <Nav />
          </div>
      </Container>
    </header>
  );
};

export default Header;
