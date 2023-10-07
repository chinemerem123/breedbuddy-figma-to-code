import React from "react";

import { Button, Img, Line, List, Text } from "components";

const BreedbuddyPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-montserratalternates items-center justify-end mx-auto pt-[13px] w-full">
        <div className="md:h-[1035px] h-[1791px] sm:h-[932px] md:px-5 relative w-full">
          <div className="absolute flex flex-col md:gap-10 gap-[396px] inset-x-[0] justify-start mx-auto top-[1%] w-full">
            <div className="backdrop-opacity-[0.5] bg-gray-800 blur-[684.00px] h-[207px] md:ml-[0] ml-[1210px] rounded-[108px] w-[16%]"></div>
            <Img
              className="h-[329px] md:h-auto mr-[1204px] object-cover w-[16%]"
              src="images/img_ellipse1.png"
              alt="ellipseOne_One"
            />
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto p-[45px] md:px-10 sm:px-5 top-[0] w-full">
            <div className="h-[50px] md:ml-[0] ml-[23px] relative w-[11%] md:w-full">
              <Img
                className="absolute h-[50px] inset-y-[0] left-[0] my-auto object-cover w-[50px]"
                src="images/img_solarpawboldduotone.png"
                alt="solarpawboldduo"
              />
              <Text
                className="absolute bg-clip-text bg-gradient  right-[12%] text-transparent text-xl top-[0]"
                size="txtMontserratAlternatesMedium20"
              >
                BREED
              </Text>
              <Text
                className="absolute bg-clip-text bg-gradient1  bottom-[4%] right-[0] text-transparent text-xl"
                size="txtMontserratAlternatesSemiBold20"
              >
                BUDDY
              </Text>
            </div>
            <div className="flex flex-row gap-20 items-center justify-center md:ml-[0] ml-[150px] p-2.5 w-auto">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratAlternatesMedium16"
              >
                About
              </Text>
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratAlternatesMedium16"
              >
                Services
              </Text>
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratAlternatesMedium16"
              >
                Features
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-center md:ml-[0] ml-[317px] w-1/4 md:w-full">
              <div className="flex flex-col items-center justify-center sm:px-5 px-[21px] py-[17px] w-[157px]">
                <a
                  href="javascript:"
                  className="text-base text-white-A700 w-auto"
                >
                  <Text size="txtMontserratAlternatesMedium16">Login</Text>
                </a>
              </div>
              <Button
                className="bg-transparent border border-solid cursor-pointer font-medium gray_700_33_black_900_33_border leading-[normal] rounded-[5px] text-base text-center w-[157px]"
                color="gray_900_01"
                size="sm"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-end mx-auto p-10 sm:px-5 top-[8%] w-full">
            <div className="flex md:flex-col flex-row gap-1.5 items-start justify-start mt-[43px] w-[96%] md:w-full">
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[7px] w-1/2 md:w-full">
                <div className="flex flex-col gap-px items-start justify-center p-2.5 w-auto md:w-full">
                  <Text
                    className="md:text-5xl text-[75px] text-white-A700 w-auto"
                    size="txtMontserratAlternatesBold75"
                  >
                    You Can Find
                  </Text>
                  <Text
                    className="bg-clip-text bg-gradient2  md:text-5xl text-[75px] text-transparent w-auto"
                    size="txtMontserratAlternatesBold75Orange10002"
                  >
                    Cross Breeders
                  </Text>
                  <Text
                    className="md:text-5xl text-[75px] text-white-A700 w-auto"
                    size="txtMontserratAlternatesBold75"
                  >
                    For your Pets
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center max-w-[646px] mt-3 p-2.5 w-full">
                  <Text
                    className="leading-[34.00px] max-w-[626px] md:max-w-full text-lg text-white-A700_b2 tracking-[0.18px]"
                    size="txtMontserratAlternatesMedium18"
                  >
                    Lorem ipsum dolor sit amet consectetur. Ut eget morbi
                    tincidunt nulla velit egestas. A bibendum suspendisse
                    pulvinar venenatis duis dignissim sem. Eget nibh ultrices
                    natoque pulvinar tellus egestas. A condimentum vestibulum
                    volutpat sed dui.
                  </Text>
                </div>
                <div className="h-[60px] md:h-[91px] ml-2.5 md:ml-[0] mt-[31px] relative rounded-[5px] w-[32%]">
                  <Img
                    className="h-[60px] m-auto object-cover rounded-[5px] w-full"
                    src="images/img_rectangle.png"
                    alt="rectangle"
                  />
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                    size="txtMontserratAlternatesBold18"
                  >
                    Get Started
                  </Text>
                </div>
              </div>
              <div className="md:h-[351px] h-[631px] relative w-1/2 md:w-full">
                <Img
                  className="absolute h-[351px] left-[0] object-cover rounded-bl-[160px] rounded-br-[160px] rounded-tl-[100px] rounded-tr-[100px] top-[0] w-[53%]"
                  src="images/img_rectangle1.png"
                  alt="rectangleOne"
                />
                <Img
                  className="absolute bottom-[0] h-[329px] object-cover right-[0] rounded-bl-[100px] rounded-br-[100px] rounded-tl-[160px] rounded-tr-[160px] w-[55%]"
                  src="images/img_rectangle2.png"
                  alt="rectangleTwo"
                />
                <Img
                  className="absolute bottom-[0] h-[253px] left-[0] rounded-[50%] w-[253px]"
                  src="images/img_ellipse3.png"
                  alt="ellipseThree"
                />
                <Img
                  className="absolute h-[253px] right-[0] rounded-[50%] top-[1%] w-[253px]"
                  src="images/img_ellipse4.png"
                  alt="ellipseFour"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
            <div className="h-[697px] md:h-[771px] mb-[43px] mt-[31px] pr-[5px] relative w-full">
              <div className="h-[697px] m-auto w-full">
                <div className="h-[697px] m-auto w-full">
                  <Img
                    className="h-[697px] m-auto object-cover rounded-[100px]"
                    src="images/img_rectangle3.png"
                    alt="rectangleThree"
                  />
                  <div className="absolute flex flex-col items-start justify-start left-[6%] top-[11%] w-[36%]">
                    <div className="flex flex-col items-center justify-center p-2.5 w-auto">
                      <Text
                        className="sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                        size="txtMontserratAlternatesSemiBold45"
                      >
                        <>
                          Why
                          <br />
                          Choose US?
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-3.5 p-2.5 w-auto sm:w-full">
                      <Text
                        className="leading-[34.00px] max-w-[442px] md:max-w-full text-lg text-white-A700_b2 tracking-[0.18px]"
                        size="txtMontserratAlternatesMedium18"
                      >
                        Lorem ipsum dolor sit amet consectetur. Ut eget morbi
                        tincidunt nulla velit egestas.{" "}
                      </Text>
                    </div>
                    <div className="bg-blue_gray-200 h-[233px] mt-10 rounded-[30px] w-[34%]"></div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[21%] h-[173px] left-[9%] object-cover rounded-[40px] w-[32%]"
                  src="images/img_rectangle5.png"
                  alt="rectangleFive"
                />
                <div className="absolute flex md:flex-col flex-row gap-[55px] items-start justify-center right-[6%] top-[1%] w-[48%]">
                  <div className="bg-purple-300_02 flex flex-col items-start justify-center mb-[41px] p-[21px] sm:px-5 rounded-[50px] w-[49%] md:w-full">
                    <Button
                      className="flex h-[70px] items-center justify-center md:ml-[0] ml-[7px] mt-[3px] w-[70px]"
                      shape="circle"
                      size="sm"
                    >
                      <Img
                        className="h-10"
                        src="images/img_basilawardoutline.svg"
                        alt="basilawardoutli"
                      />
                    </Button>
                    <div className="flex flex-col items-center justify-center md:ml-[0] ml-[3px] mt-3 p-2.5 w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtMontserratAlternatesBold18"
                      >
                        Quality Product Offering{" "}
                      </Text>
                    </div>
                    <Text
                      className="leading-[27.00px] mb-[43px] ml-2.5 md:ml-[0] mt-1 text-base text-white-A700_e5 tracking-[0.16px] w-[92%] sm:w-full"
                      size="txtMontserratAlternatesMedium16WhiteA700e5"
                    >
                      Eget nibh ultrices natoque pulvinar tellus egestas. A
                      condimentum
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center md:mt-0 mt-[77px] p-[21px] sm:px-5 rounded-[44px] w-[43%] md:w-full">
                    <Button
                      className="flex items-center justify-center ml-0.5 md:ml-[0] w-[62px]"
                      shape="round"
                    >
                      <Img
                        className="h-[35px]"
                        src="images/img_solarlikeoutline.svg"
                        alt="solarlikeoutlin"
                      />
                    </Button>
                    <div className="flex flex-col items-center justify-center mt-2.5 p-[8.8px] w-auto">
                      <Text
                        className="text-[15.84px] text-white-A700 w-auto"
                        size="txtMontserratAlternatesBold1584"
                      >
                        Excellent Service
                      </Text>
                    </div>
                    <Text
                      className="leading-[23.00px] mb-[34px] md:ml-[0] ml-[7px] mt-1 text-[14.08px] text-white-A700_e5 tracking-[0.14px] w-[94%] sm:w-full"
                      size="txtMontserratAlternatesMedium1408"
                    >
                      Eget nibh ultrices natoque pulvinar tellus egestas. A
                      condimentum
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="absolute bottom-[12%] sm:flex-col flex-row md:gap-10 gap-[73px] grid sm:grid-cols-1 grid-cols-2 right-[6%] w-[47%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-center p-5 rounded-[44px] w-full">
                  <Button
                    className="flex items-center justify-center ml-1 md:ml-[0] w-[62px]"
                    shape="round"
                  >
                    <Img
                      className="h-[35px]"
                      src="images/img_mapveterinarycare.svg"
                      alt="mapveterinaryca"
                    />
                  </Button>
                  <div className="flex flex-col items-center justify-center mt-2.5 p-[8.8px] w-auto">
                    <Text
                      className="text-[15.84px] text-white-A700 w-auto"
                      size="txtMontserratAlternatesBold1584"
                    >
                      Veterinary Professionals
                    </Text>
                  </div>
                  <Text
                    className="leading-[23.00px] mb-9 ml-2 md:ml-[0] mt-1 text-[14.08px] text-white-A700_e5 tracking-[0.14px] w-[93%] sm:w-full"
                    size="txtMontserratAlternatesMedium1408"
                  >
                    Eget nibh ultrices natoque pulvinar tellus egestas. A
                    condimentum
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center p-[21px] sm:px-5 rounded-[44px] w-full">
                  <Button
                    className="flex items-center justify-center ml-0.5 md:ml-[0] w-[62px]"
                    shape="round"
                  >
                    <Img
                      className="h-[35px]"
                      src="images/img_uilshop.svg"
                      alt="uilshop"
                    />
                  </Button>
                  <div className="flex flex-col items-center justify-center mt-2.5 p-[8.8px] w-auto">
                    <Text
                      className="text-[15.84px] text-white-A700 w-auto"
                      size="txtMontserratAlternatesBold1584"
                    >
                      Pet Shops
                    </Text>
                  </div>
                  <Text
                    className="leading-[23.00px] mb-[34px] md:ml-[0] ml-[7px] mt-1 text-[14.08px] text-white-A700_e5 tracking-[0.14px] w-[94%] sm:w-full"
                    size="txtMontserratAlternatesMedium1408"
                  >
                    Eget nibh ultrices natoque pulvinar tellus egestas. A
                    condimentum
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex sm:h-[1020px] h-[1032px] md:h-[1458px] justify-end mx-auto w-full">
            <Img
              className="h-[389px] mb-[300px] ml-auto mt-auto object-cover w-[13%]"
              src="images/img_ellipse1_389x175.png"
              alt="ellipseOne_Two"
            />
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto p-10 sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[86px] items-center justify-start mb-[21px] w-[95%] md:w-full">
                <div className="flex flex-col gap-2.5 items-center justify-center p-2.5 w-auto md:w-full">
                  <Text
                    className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 w-auto"
                    size="txtMontserratAlternatesSemiBold45"
                  >
                    Features
                  </Text>
                  <Text
                    className="text-center text-lg text-white-A700_b2 tracking-[0.18px] w-auto"
                    size="txtMontserratAlternatesMedium18"
                  >
                    Lorem ipsum dolor sit amet consectetur. Ut eget morbi
                    tincidunt nulla velit egestas.{" "}
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[57px] items-start justify-between w-full">
                  <div className="md:h-[579px] h-[726px] relative w-[45%] md:w-full">
                    <Img
                      className="h-[579px] mx-auto object-cover rounded-[40px] w-full"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="absolute bg-gray-900_a5 border-2 border-solid bottom-[22%] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[7px] rounded-[56px] w-[95%] white_A700_33_black_900_33_border">
                      <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start ml-1 md:ml-[0] w-[90%] md:w-full">
                        <Img
                          className="h-[98px] md:h-auto rounded-[50%] w-[98px]"
                          src="images/img_ellipse5.png"
                          alt="ellipseFive"
                        />
                        <div className="flex flex-col items-start justify-start sm:mt-0 mt-2.5">
                          <Text
                            className="text-[15.84px] text-white-A700"
                            size="txtMontserratAlternatesBold1584"
                          >
                            Excellent Service
                          </Text>
                          <Text
                            className="leading-[21.00px] mt-1 text-base text-white-A700_cc tracking-[0.16px]"
                            size="txtMontserratAlternatesMedium16WhiteA700cc"
                          >
                            <>
                              eget morbi tincidunt nulla velit eget morb
                              <br />
                              egestas.{" "}
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-3 w-[52%] md:w-full">
                    <List
                      className="flex flex-col gap-[18px] items-center pt-40 w-full"
                      orientation="vertical"
                    >
                      <div className="h-[110px] md:h-[76px] my-0 relative w-[652px] md:w-full">
                        <div className="absolute flex flex-col items-center justify-center left-[0] p-2.5 top-[0] w-auto">
                          <Text
                            className="text-white-A700 text-xl tracking-[0.20px] w-auto"
                            size="txtMontserratAlternatesMedium20WhiteA700"
                          >
                            Pet Owners
                          </Text>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto p-2.5 w-auto">
                          <Text
                            className="leading-[28.00px] max-w-[632px] md:max-w-full text-base text-white-A700 tracking-[0.16px]"
                            size="txtMontserratAlternatesRegular16"
                          >
                            Users can discover pet-related events, pet-friendly
                            locations, participate in community forums, and
                            access educational resources.
                          </Text>
                        </div>
                      </div>
                      <div className="md:h-[104px] h-[138px] my-0 relative w-[652px] md:w-full">
                        <div className="absolute flex flex-col items-center justify-center left-[0] p-2.5 top-[0] w-auto">
                          <Text
                            className="text-white-A700 text-xl tracking-[0.20px] w-auto"
                            size="txtMontserratAlternatesMedium20WhiteA700"
                          >
                            Location-Based Discovery
                          </Text>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto p-2.5 w-auto">
                          <Text
                            className="leading-[28.00px] max-w-[632px] md:max-w-full text-base text-white-A700 tracking-[0.16px]"
                            size="txtMontserratAlternatesRegular16"
                          >
                            Users can explore a location-based feature that
                            allows them to discover nearby cross breeders and
                            veterinary professionals, just like how Tinder shows
                            potential matches based on proximity.
                          </Text>
                        </div>
                      </div>
                      <div className="md:h-[104px] h-[138px] my-0 relative w-[652px] md:w-full">
                        <div className="absolute flex flex-col items-center justify-center left-[0] p-2.5 top-[0] w-auto">
                          <Text
                            className="text-white-A700 text-xl tracking-[0.20px] w-auto"
                            size="txtMontserratAlternatesMedium20WhiteA700"
                          >
                            Veterinary Professionals
                          </Text>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto p-2.5 w-auto">
                          <Text
                            className="leading-[28.00px] max-w-[632px] md:max-w-full text-base text-white-A700 tracking-[0.16px]"
                            size="txtMontserratAlternatesRegular16"
                          >
                            Users can explore a location-based feature that
                            allows them to discover nearby cross breeders and
                            veterinary professionals, just like how Tinder shows
                            potential matches based on proximity.
                          </Text>
                        </div>
                      </div>
                      <div className="h-[110px] md:h-[76px] my-0 relative w-[652px] md:w-full">
                        <div className="absolute flex flex-col items-center justify-center left-[0] p-2.5 top-[0] w-auto">
                          <Text
                            className="text-white-A700 text-xl tracking-[0.20px] w-auto"
                            size="txtMontserratAlternatesMedium20WhiteA700"
                          >
                            Pet Shops
                          </Text>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto p-2.5 w-auto">
                          <Text
                            className="leading-[28.00px] max-w-[632px] md:max-w-full text-base text-white-A700 tracking-[0.16px]"
                            size="txtMontserratAlternatesRegular16"
                          >
                            Pet shops and grooming centers can create profiles,
                            list their services, and showcase their products.
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray-900_02 flex items-center justify-center mt-[-61px] mx-auto w-full z-[1]">
            <div className="flex flex-col items-center justify-center mb-8 ml-[66px] mr-[70px] mt-11 w-[91%]">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[93%] md:w-full">
                  <div className="flex flex-col gap-[25px] justify-start md:mt-0 mt-[5px] w-[33%] md:w-full">
                    <div className="h-[50px] relative w-[35%]">
                      <Img
                        className="absolute h-[50px] inset-y-[0] left-[0] my-auto object-cover w-[50px]"
                        src="images/img_solarpawboldduotone.png"
                        alt="solarpawboldduo_One"
                      />
                      <Text
                        className="absolute bg-clip-text bg-gradient  right-[12%] text-transparent text-xl top-[0]"
                        size="txtMontserratAlternatesMedium20"
                      >
                        BREED
                      </Text>
                      <Text
                        className="absolute bg-clip-text bg-gradient1  bottom-[4%] right-[0] text-transparent text-xl"
                        size="txtMontserratAlternatesSemiBold20"
                      >
                        BUDDY
                      </Text>
                    </div>
                    <Text
                      className="leading-[34.00px] md:ml-[0] ml-[7px] text-lg text-white-A700_b2 tracking-[0.18px] w-[99%] sm:w-full"
                      size="txtMontserratAlternatesRegular18"
                    >
                      Lorem ipsum dolor sit amet consectetur. Ut eget morbi
                      tincidunt nulla velit egestas.{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[122px] w-auto">
                    <div className="flex flex-col items-center justify-center p-2.5 w-auto">
                      <Text
                        className="text-white-A700 text-xl tracking-[0.20px] w-auto"
                        size="txtMontserratAlternatesSemiBold20WhiteA700"
                      >
                        Links
                      </Text>
                    </div>
                    <ul className="flex flex-col gap-3.5 items-start justify-center p-2.5 w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_b2 tracking-[0.16px]"
                        >
                          <Text size="txtMontserratAlternatesRegular16WhiteA700b2">
                            About
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_b2 tracking-[0.16px]"
                        >
                          <Text size="txtMontserratAlternatesRegular16WhiteA700b2">
                            Service
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_b2 tracking-[0.16px]"
                        >
                          <Text size="txtMontserratAlternatesRegular16WhiteA700b2">
                            Fearures
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[142px] w-auto">
                    <div className="flex flex-col items-center justify-center p-2.5 w-auto">
                      <Text
                        className="text-white-A700 text-xl tracking-[0.20px] w-auto"
                        size="txtMontserratAlternatesSemiBold20WhiteA700"
                      >
                        Others
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-center p-2.5 w-auto">
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_b2 tracking-[0.16px] w-auto"
                      >
                        <Text size="txtMontserratAlternatesRegular16WhiteA700b2">
                          Privacy Policy
                        </Text>
                      </a>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_b2 tracking-[0.16px] w-auto"
                      >
                        <Text size="txtMontserratAlternatesRegular16WhiteA700b2">
                          Terms & Conditions
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[142px] w-auto">
                    <div className="flex flex-col items-center justify-center p-2.5 w-auto">
                      <Text
                        className="text-white-A700 text-xl tracking-[0.20px] w-auto"
                        size="txtMontserratAlternatesSemiBold20WhiteA700"
                      >
                        Socials
                      </Text>
                    </div>
                    <ul className="flex flex-col gap-3.5 items-start justify-center p-2.5 w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_b2 tracking-[0.16px]"
                        >
                          <Text size="txtMontserratAlternatesRegular16WhiteA700b2">
                            Facebook
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_b2 tracking-[0.16px]"
                        >
                          <Text size="txtMontserratAlternatesRegular16WhiteA700b2">
                            Instagram
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_b2 tracking-[0.16px]"
                        >
                          <Text size="txtMontserratAlternatesRegular16WhiteA700b2">
                            X
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Line className="bg-white-A700_19 h-px md:ml-[0] ml-[5px] mt-[35px] w-full" />
                <div className="flex flex-col items-center justify-center md:ml-[0] ml-[501px] mt-5 p-2.5 w-auto">
                  <Text
                    className="text-gray-800_01 text-lg w-auto"
                    size="txtMontserratAlternatesMedium18Gray80001"
                  >
                     Copyright © 2023 BreedBuddy
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default BreedbuddyPage;
