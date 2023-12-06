import React from "react";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header2/Header2";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { BiCross, BiPlus, BiX } from "react-icons/bi";
import Footer from "../../components/Footer/Footer";

const FooterPages = () => {
  const [pageType, setPageType] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location) {
      setPageType(location?.state?.type);
    }
  }, [location]);

  const [target, setTarget] = useState(null);
  const toggleTarget = (id) => {
    setTarget(id);
  };

  return (
    <>
      <div className="flex flex-col">
        <Header />
        <Header2 />
        <div className="w-full min-h-[200px] flex justify-center z-1">
          <div className=" sm:w-[950px] mt-5 shadow-xl border border-[#1a1a1d26] sm:pl-24 pl-3 pr-3 sm:pr-24 pt-10 pb-10 mb-10">
            {pageType === "return&refund" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase sm:text-xl text-sm font-semibold">
                  Returns & Refund
                </h1>
                <br />
                Please read our Returns & Refund Policy here. <br />
                <br />
                <span className="font-semibold">
                  I have received a damaged product, what should I do?
                </span>{" "}
                <br />
                <br />
                – You received a damaged item. We will require you to send proof
                of damage (an unboxing video) within 5 days from the date of
                delivery after that no requests will be entertained.
                <br />{" "}
                <span className="font-semibold">
                  Just mail us at :support@harshhasthkala.com
                </span>{" "}
                <br />
                <br />
                <span className="font-semibold">
                  How do I cancel an order?
                </span>{" "}
                <br />
                <br />
                Before 24 hours, Our staff will manually review all orders on
                that day. The order review will be completed within 24 hours. It
                includes checking all customers’ info, shipping address,
                spelling errors, missing street numbers or other details, etc.
                Within this period, cancellation is still possible. <br />
                <br />
                After the order review, all orders of that day will be
                fulfilled. It includes packaging, sorting, and dispatching. In
                this stage, NO CANCELLATION is accepted. <br />
                <br />
                <span className="font-semibold">
                  What is your return policy?
                </span>{" "}
                <br />
                <br />
                You received an incorrect item, size, style, etc. In this
                situation, we will require you to send a photo and video within
                5 days from the date of delivery. You may also opt for a resend
                only if the request is accepted. Resends will take 5-9 business
                days, just like placing a new order. <br />
                <br />
                BULK ORDER FORM <br />
                Take reference from www.indigifts website for the form
              </p>
            )}
            {pageType === "faqs" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase text-sm sm:text-xl font-semibold">
                  FAQ'S
                </h1>
                Frequently Asked Questions <br />
                <br />
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      01
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-0">
                        What products does Harsh Hathkala sell?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 1 ? "block" : "hidden"
                        } z-1`}
                      >
                        Harsh Hasthkala brand is known for its beautiful and
                        affordable gifts. In this industry of gifts we are very
                        different with our practice which includes “Perfect Gift
                        with Perfect Craft” .We have created this brand with all
                        the love we have for gifts and with a vision to spread
                        love with our special gift hampers to your special ones.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(1) : toggleTarget(null);
                    }}
                  >
                    {target == 1 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      02
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-0">
                        Why should I shop from Harsh HasthKala?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 2 ? "block" : "hidden"
                        } z-1`}
                      >
                        With affordable pricing, attractive offers, and 100%
                        genuine products, we will leave you pleasantly
                        surprised. Each product is unique and will make you go
                        ‘wow’!
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(2) : toggleTarget(null);
                    }}
                  >
                    {target == 2 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      03
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        How will I know that my order is confirmed?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 3 ? "block" : "hidden"
                        } z-1`}
                      >
                        When you place your order, we know that you want to
                        receive the item as fast as possible. We will make that
                        happen.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(3) : toggleTarget(null);
                    }}
                  >
                    {target == 3 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      04
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        When will you ship my order?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 4 ? "block" : "hidden"
                        } z-1`}
                      >
                        We normally ship all orders within 5 – 9 business days.
                        Final delivery time will vary based on delivery
                        location. For further details, please check Shipping &
                        Delivery (plz add link of that page )
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(4) : toggleTarget(null);
                    }}
                  >
                    {target == 4 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      05
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        When will my order get delivered?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 5 ? "block" : "hidden"
                        } z-1`}
                      >
                        Transit and delivery time may vary depending on your
                        location and the items ordered. We’ll send you a link to
                        track the status of your order.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(5) : toggleTarget(null);
                    }}
                  >
                    {target == 5 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      06
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        How much do you charge for delivery?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 6 ? "block" : "hidden"
                        } z-1`}
                      >
                        We offer free shipping on all orders.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(6) : toggleTarget(null);
                    }}
                  >
                    {target == 6 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      07
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        How can I track my order?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 7 ? "block" : "hidden"
                        } z-1`}
                      >
                        An email is sent to you after the order is shipped. It
                        contains the tracking number and details of the service
                        provider. If you are having trouble reading the emails
                        or if you haven’t received any updates, please get in
                        touch with us immediately
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(7) : toggleTarget(null);
                    }}
                  >
                    {target == 7 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
                <div className="flex pt-10 w-full items-center justify-between">
                  <div className="flex">
                    <div className="flex font-dmsans text-3xl font-bold text-[#383838] mr-8">
                      08
                    </div>
                    <div className="flex flex-col pr-9">
                      <p className="font-dmsans mb-2 text-xl font-semibold bg-white h-10 z-50">
                        How do I place bulk order?
                      </p>
                      <p
                        className={`text-[#484848] transition-all duration-300 relative ${
                          target == 8 ? "block" : "hidden"
                        } z-1`}
                      >
                        Our products are simply awesome and buying one is just
                        not enough! You can place bulk orders by contacting us
                        at sales@harshhasthkala.com . We offer customization as
                        well
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      target == null ? toggleTarget(8) : toggleTarget(null);
                    }}
                  >
                    {target == 8 ? <BiX size={30} /> : <BiPlus size={30} />}
                  </div>
                </div>
              </p>
            )}

            {pageType === "privacypolicy" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase text-sm  sm:text-xl font-semibold">
                  Privacy & Policy
                </h1>
                <br />
                <span className="font-semibold">
                  INFORMATION WE COLLECT:
                </span>
                <br />
                <br />
                Contact information: We might collect your name, email, mobile number, phone number, street, city, state, pin code, country, and IP address.
                <br />
                <br />
                Payment and billing information: We might collect your billing name, billing address, and payment method when you make a purchase. We NEVER collect your credit card number or credit card expiry date or other details about your credit card on our website. Credit card information will be obtained and processed by our online payment partner.
                <br />
                <br />
                Other information: If you use our website, we may collect information about your IP address and the browser you are using. We might look at what site you came from, the duration of time spent on our website, pages accessed, or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.
                <br />
                <br />
                <span className="font-semibold">
                  We collect information in different ways:
                </span>
                <br />
                <br />
                We collect information directly from you. We collect information directly from you when you register for an event or buy tickets. We also collect information if you post a comment on our websites or ask us a question through phone or email.
                <br />
                <br />
                We collect information from you passively. We use tracking tools like Google Analytics, Google Webmaster, browser cookies, and web beacons for collecting information about your usage of our website.
                <br />
                <br />
                We get information about you from third parties. For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.
                <br />
                <br />
                <span className="font-semibold">
                  USE OF YOUR PERSONAL INFORMATION:
                </span>
                <br />
                <br />We use the information to contact you: We might use the information you provide to contact you for confirmation of a purchase on our website or other promotional purposes.<br />
                <br />
                We use the information to respond to your requests or questions. We might use your information to confirm your registration for a package.
                <br />
                <br />
                We use the information to improve our products and services. We might use your information to customize your experience with us. This could include displaying content based on your preferences.
                <br />
                <br />
                We use the information to look at site trends and customer interests. We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.
                <br />
                <br />
                We use the information for security purposes. We may use the information to protect our company, our customers, or our websites.
                <br />
                <br />
                We use the information for marketing purposes. We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our offers or products, or third-party offers or products we think you might find interesting. Or, for example, if you buy tickets from us we’ll enroll you in our newsletter.
                <br />
                <br />
                We use the information to send you transactional communications. We might send you emails or SMS about your account or a ticket purchase.
                <br />
                <br />
                We use information as otherwise permitted by law.
                <br />
                <br />
                <span className="font-semibold">
                  SHARING OF INFORMATION WITH THIRD PARTIES:
                </span>
                <br />
                <br />

                We will share information with third parties who perform services on our behalf. We share information with vendors who help us manage our online registration process or payment processors or transactional message processors.
                <br />
                <br />
                We may share information if we think we have to comply with the law or to protect ourselves. We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests it. Or we might also share information when we are investigating potential fraud.
                <br />
                <br />
                We may share information with any successor to all or part of our business. For example, if part of our business is sold, we may give our customer list as part of that transaction.
                <br />
                <br />
                <span className="font-semibold">
                  EMAIL OPT-OUT:
                </span>
                <br />
                <br />
                You can opt out of receiving our marketing emails. To stop receiving our promotional emails, please email us at harshhasthkala@gmail.com. It may take about ten days to process your request. Even if you opt out of getting marketing messages, we will still be sending you transactional messages through email and SMS about your purchases.
                <br />
                <br />
                <span className="font-semibold">
                  THIRD-PARTY SITES:
                </span>
                <br />
                <br />
                If you click on one of the links to third-party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third-party sites.
                <br />
                <br />
                <span className="font-semibold">
                  JURISDICTION:
                </span>
                <br />
                <br />
                If you choose to visit the website, your visit and any dispute over privacy are subject to this Policy and the website’s terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.
                <br />
                <br />
                <span className="font-semibold">
                  GRIEVANCE OFFICER:
                </span>
                <br />
                <br />
                By Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:
                <br />
                <br />
                Mr. Dikshant Tamrakar, (Head of Operations)
                <br />
                1137,Sanjeevaninagar, garha, Jabalpur (M.P)482003
                <br />
                Email: harshhasthkala@gmail.com
                <br />
              </p>
            )}

            {pageType === "terms&condition" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase text-sm sm:text-xl font-semibold">
                  TERMS AND CONDITIONS
                </h1>
                <br />
                1. The user may carefully read all the information on products
                and services as provided in relevant sections and in FAQs.{" "}
                <br />
                <br />
                2. This site is owned by Harsh hasthkala Private Limited (“Harsh
                hasthkala”). No material from this site or any other website
                owned, operated, controlled or licensed by Harsh hasthkala
                and/or its associates or its sister concerns may be copied,
                reproduced, republished, transmitted, downloaded, uploaded or in
                any other manner for commercial use or otherwise without the
                written permission of the Harsh hasthkala. Violation of this
                condition is a violation of copyright and other proprietary
                rights of the Company and/or its associates or sister concerns
                or affiliates and will attract legal action as per existing laws
                of the Government of India. <br />
                <br />
                3. The products/services provided on this site are without
                warranties of any kind either expressed or implied and Harsh
                hasthkala disclaims all or any of them fully. Harsh hasthkala
                does not warrant that the products/services offered will be
                error-free, or that the defects will be corrected, or that this
                site or the server that makes it available are or will be free
                of viruses or other harmful components. Any warranties or After
                Sale Services if any offered by the Manufacturers/Vendors on any
                product shall be serviced directly by such Manufacturer/Vendor
                and Harsh hasthkala shall not be under any obligation to ensure
                compliance or handle complaints. <br />
                <br />
                4. There is sometime a possibility of extra charges like Taxes
                or Duties which are to be borne by the recipient at the time of
                delivery. Please note that Harsh hasthkala does not control
                these charges. <br />
                <br />
                5. If the delivery is not executed during the attempt due to
                incorrect or insufficient address, recipient not at home,
                address found locked or refusal to accept, the customer shall
                still be charged for the order. No refunds would be entertained
                for such items. <br />
                <br />
                6. There may be a slight variation from the picture shown.
                However, we will make sure that we deliver the Product
                arrangement and the colours as close as possible to the
                description/ photograph shown. <br />
                <br />
                7. The product specifications (weight, size, colour etc.)
                mentioned with the product photos are only approximate. Most
                products here are handmade items. There may, hence, be a
                variation in the pictures and the respective products. Harsh
                hasthkala at its absolute discretion, may deliver a similar /
                alternate product for reasons or exigencies beyond its control.{" "}
                <br />
                <br />
                8. Under no circumstances whatsoever shall Harsh hasthkala be
                liable for any loss of data, loss of profits or any damages
                whatsoever including, without limiting, any indirect, special,
                incidental, consequential or other damages that result from the
                use of or inability to use the products/services offered on the
                site Notwithstanding the foregoing, in no event shall Harsh
                hasthkala be liable to the user for any or all damages, losses,
                and causes of action (including but not limited to, negligence)
                or otherwise exceeding the amount paid by the user to Harsh
                hasthkala for that specific service/product. <br />
                <br />
                9. In an effort to provide our customers with the most current
                information, Harsh hasthkala will, from time to time, make
                changes in the Contents and in the products or services
                described on this Site. The prices advertised on this Site are
                for Internet orders. Prices and the availability of items are
                subject to change without notice. Any prices used on this Site
                may not be indicative of the actual selling prices in your area.
                We reserve the right to limit sales, including the right to
                prohibit sales to re-sellers. We are not responsible for
                typographical or photographic errors. <br />
                <br />
                10. Users who have availed services through Harsh hasthkala.com
                by selecting one or more listed service providers: Harsh
                hasthkala.com reaches out to these users via SMS / E-mail / Call
                / WhatsApp messages Online after their scheduled appointment
                schedule and ask them for Feedback on their experience or inform
                them on the latest product updates from the Service provider.
                Harsh hasthkala.com has complete ownership of this flow of
                feedback collection. <br />
                <br />
                11. Notwithstanding any or all of the terms, conditions &
                disclaimers stated herein above and in FAQ or elsewhere in the
                site, any refund or payment by Harsh hasthkala to the user or
                anyone else acting on his behalf for any reason whatsoever,
                voluntarily or on being claimed by any user shall not become a
                waiver of any or all of the Terms, Conditions and Disclaimers
                made and shall not become a precedent for similar future
                actions/claims or confer any rights on the claimant. And further
                that all such refunds/payments if any when made shall be subject
                to 10% deduction on account of Bank charges and other processing
                overheads. <br />
                <br />
                12. If the user has any questions, doubts or confusion in regard
                to any of the terms & conditions set out herein, he should seek
                clarifications from us through email Harsh hasthkala@gmail.com
                and should wait for a written clarification before using the
                service <br />
                <br />
                13. In case of a query, concern, or complaint in relation to
                compliance issues related to Consumer Protection (E-Commerce)
                Rules, Consumer Protection Act and Information Technology
                (Sensitive Personal Data or Information) Rules, please contact
                Mr. Ashwin R Francis (Compliance Officer) at Harsh
                hasthkala@gmail.com <br />
                <br />
                The user of Harsh hasthkala is presumed to have read all the
                terms and conditions herein and FAQ and is deemed to have
                agreed, understood and accepted unconditionally all the terms,
                conditions, procedures and risks of using the services and
                cannot at any time claim ignorance of any or all of them. In
                event of any disputes between the parties in connection with any
                provision, both the parties hereto, shall endeavour to settle
                dispute amicably. In event Parties fail to settle within 30
                days, the dispute shall be referred to sole Arbitrator, governed
                by the Arbitration and Conciliation Act, 1996. All the disputes
                will subject to the Judiciary of Madhya Pradesh Jurisdiction.
              </p>
            )}

            {pageType === "ourstory" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase text-sm sm:text-xl font-semibold">
                  OUR STORY
                </h1>
                <br />
                Founded in 2022, Harsh hasthkala is a premier company
                specializing in providing both customized and standardized gifts
                that are guaranteed to bring joy and smiles to your loved ones'
                faces. Our mission is to help you find the perfect gift that
                truly reflects the uniqueness and individuality of your special
                someone. <br />
                <br />
                At Harsh hasthkala, we understand the struggle of finding the
                right gift, that’s what happened with Let me share with you the
                story of this incredibly talented founder who enjoys giving
                gifts to his loved ones. The most unique thing about him is that
                he always tried to add a personal touch to each gift he gave,
                and as a result, no girl ever learned about any other girl in
                his life (har ladki ke liye alag gift tha kyu ki). Jokes aside,
                he realised that this was a problem with our gift-giving custom,
                where our minds are trained just to give clothes and chocolates
                as gifts, let’s bring this new trend of personalized gifting,
                giving gifts with a special touch for your khass people, Since
                we are based in Madhya Pradesh, he also noticed how the state's
                art is diminishing and the art that was popular during those
                times is disappearing day by day. The talented artists were
                leaving their craft and taking jobs outside with extremely low
                pay, and the main problem is that there is no platform for them
                to sell this incredible art form. We have made a new platform
                for these skilful artists to promote and sell their art on our
                platform and we always wanted to add a touch of our tribal art
                as we have Mandana Painting, Pithora painting, Gond art etc.
                which are beautiful and deserves a social importance. <br />
                <br />
                Why settle for mundane, run-of-the-mill presents when you can
                surprise your special ones with something extraordinary with
                Harsh hasthkala? With our thoughtfully selected collection, you
                can say goodbye to boring gifts once and for all. Whether it's a
                birthday, anniversary, wedding, or any other occasion, we have
                the perfect gift to make your moments even more memorable.{" "}
                <br />
                <br />
                At Harsh hasthkala we prioritize customer satisfaction above all
                else. Our user-friendly website makes it effortless for you to
                explore our product range, place orders, and track deliveries.
                Our dedicated customer support team is always ready to assist
                you with any queries or special requests you may have. <br />
                <br />
                Join us in our mission to elevate the art of gift-giving and
                this going indigenous for gifting and make every occasion a
                memorable celebration. Let Harsh hasthkala be your go-to
                destination for finding that perfect gift that will touch the
                hearts of your loved ones and leave a lasting impression.
                Together, let's create cherished moments and memories with no
                more boring gifts, only special surprises for your special ones!
              </p>
            )}

            {pageType === "shipping&delivery" && (
              <p className="text-xs">
                <h1 className="font-dmsans uppercase text-sm sm:text-xl font-semibold">
                  Shipping and Delivery
                </h1>
                <br />
                Thank you for shopping with Harsh Hasthkala ! We are committed to providing you with a seamless and enjoyable shopping experience. Please take a moment to review our shipping policy. <br />
                <br />
                Orders are processed within 1-2 business days after payment is confirmed.
                Orders placed on weekends or holidays will be processed on the next business day.
                Estimated Delivery Time:8-10 working days.
                <br />
                <br />
                The average delivery time is 8-10 working days from the date of order processing.
                Please note that delivery times may vary depending on your location and may be affected by external factors such as customs clearance, holidays, and unforeseen circumstances.
                <br />
                <br />
                Shipping costs are calculated based on the weight and dimensions of the products in your order.
                <br />
                You can view the shipping cost for your order during the checkout process.
                <br />
                <br />
                Once your order is shipped, you will receive a confirmation email with a tracking number.
                You can track the status of your order by entering the provided tracking number on the carrier's website.
                <br />
                <br />
                Please ensure that the shipping address provided during checkout is accurate and complete.
                We are not responsible for orders shipped to incorrect addresses provided by the customer.
                <br />
                <br />
                Our carriers will make multiple attempts to deliver your package. If no one is available to receive the package, a notice will be left with further instructions.
                <br />
                <br />
                Harsh Hasthkala is not responsible for lost or stolen packages after they have been marked as delivered by the carrier. Please ensure that the delivery location is secure.
                <br />
                <br />
                If you have any questions or concerns about your order's shipping status, please contact our customer support team at harshhasthkala@gmail.com
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FooterPages;
