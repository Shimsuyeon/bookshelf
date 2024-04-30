import "./BookDetailPage.css";
import "./Book.scss";

import BookCover from "public/images/front.png";
import { useEffect, useState } from "react";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import Font from "src/styles/fonts";
const BookDetailPage = () => {
  // 텍스트의 가시성 상태를 관리합니다.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100; // 100px 이상 스크롤됐을 때 텍스트를 보여줍니다.
      if (show) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너를 등록합니다.
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너를 정리합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Area backgroundColor="#3b3b3b">
      <Content>
        <Spacer height={"500px"} />
        {/* 스크롤에 따라 텍스트의 가시성을 조절합니다. */}
        {isVisible && (
          <Text color="white" textAlign="center" size="35px" font={Font.Mapo}>
            지스트의 온도
          </Text>
        )}
        <Spacer height={"1000px"} />
        <div className="rootbook">
          <div className="bodybook">
            <div className="cover">
              <div className="book">
                <label htmlFor="page-1" className="book__page book__page--1">
                  <Image src={BookCover} />
                </label>

                <label htmlFor="page-2" className="book__page book__page--4">
                  <div className="page__content">
                    <h1 className="page__content-title">I</h1>
                    <div className="page__content-blockquote">
                      <p className="page__content-blockquote-text">
                        HARI SELDON — . . . born in the 11,988th year of the
                        Galactic Era; died 12,069. The dates are more commonly
                        given in terms of the current Foundational Era as -79 to
                        the year 1 F.E. Born to middle-class parents on Helicon,
                        Arcturus sector (where his father, in a legend of
                        doubtful authenticity, was a tobacco grower in the
                        hydroponic plants of the planet), he early showed
                        amazing ability in mathematics. Anecdotes concerning his
                        ability are innumerable, and some are contradictory. At
                        the age of two, he is said to have. . .{" "}
                      </p>
                      <p className="page__content-blockquote-text">
                        . . . Undoubtedly his greatest contributions were in the
                        field of psychohistory. Seldon found the field little
                        more than a set of vague axioms; he left it a profound
                        statistical science. . . .{" "}
                      </p>
                      <p className="page__content-blockquote-text">
                        . . . The best existing authority we have for the
                        details of his life is the biography written by Gaal
                        Dornick who, as a young man, met Seldon two years before
                        the great mathematician's death. The story of the
                        meeting . . .
                      </p>
                      <span className="page__content-blockquote-reference">
                        Encyclopedia Galactica*
                      </span>
                    </div>
                    <div className="page__content-text">
                      <p>
                        His name was Gaal Dornick and he was just a country boy
                        who had never seen Trantor before. That is, not in real
                        life. He had seen it many times on the hyper-video, and
                        occasionally in tremendous three-dimensional newscasts
                        covering an Imperial Coronation or the opening of a
                        Galactic Council. Even though he had lived all his life
                        on the world of Synnax, which circled a star at the
                        edges of the Blue Drift, he was not cut off from
                        civilization, you see. At that time, no place in the
                        Galaxy was.{" "}
                      </p>
                    </div>
                    <div className="page__number">3</div>
                  </div>
                </label>

                <input type="radio" name="page" id="page-1" />

                <input type="radio" name="page" id="page-2" />
                <label className="book__page book__page--2">
                  <div className="book__page-front">
                    <div className="page__content">
                      <h1 className="page__content-book-title">Foundation</h1>
                      <h2 className="page__content-author">Isaac Asimov</h2>

                      <p className="page__content-credits">
                        Introduction by
                        <span>Paul Krugman</span>
                      </p>

                      <p className="page__content-credits">
                        Illustrations by
                        <span>Alex Wells</span>
                      </p>

                      <div className="page__content-copyright">
                        <p>The Folio Society</p>
                        <p>London - MMXII</p>
                      </div>
                    </div>
                  </div>
                  <div className="book__page-back">
                    <div className="page__content">
                      <h1 className="page__content-title">Contents</h1>
                      <table className="page__content-table">
                        <tr>
                          <td align="left">Part I</td>
                          <td align="left">The Psycohistorians</td>
                          <td align="right">3</td>
                        </tr>
                        <tr>
                          <td align="left">Part II</td>
                          <td align="left">The Encyclopedists</td>
                          <td align="right">43</td>
                        </tr>
                        <tr>
                          <td align="left">Part III</td>
                          <td align="left">The Mayors</td>
                          <td align="right">87</td>
                        </tr>
                        <tr>
                          <td align="left">Part IV</td>
                          <td align="left">The Traders</td>
                          <td align="right">147</td>
                        </tr>
                        <tr>
                          <td align="left">Part V</td>
                          <td align="left">The Merchant Princes</td>
                          <td align="right">173</td>
                        </tr>
                      </table>

                      <div className="page__number">2</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Area>
  );
};

export default BookDetailPage;
