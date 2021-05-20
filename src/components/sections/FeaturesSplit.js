import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Hizmetlerimiz",
    paragraph:
      "QR kod verileri basit bir resimde şifrelerken, NFC etiketleri veri depolayan bir mikroçip içerir. QR kod bir optik görüntü tanıma işlemi yoluyla çözülürken, NFC etiketleri saklanan verileri bir NFC bağlantısı üzerinden tarayarak akıllı telefonuna iletir.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Para Transferi
                </div>
                <h3 className="mt-0 mb-12">Para Transferi</h3>
                <p className="m-0">
                  Dünyanın her yerine 7/24 ucuz, güvenli ve hızlı TL, Dolar ve
                  Euro transferi gerçekleştirebilirsiniz.{" "}
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={
                    "https://image.freepik.com/free-vector/money-transaction-around-world_136162-78.jpg"
                  }
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Mobil Ödeme
                </div>
                <h3 className="mt-0 mb-12">Mobil Ödeme</h3>
                <p className="m-0">
                  QR, NFC ve mesaj yolu ile ödemelerinizi rahatlıkla
                  gerçekleştirebilirsiniz.{" "}
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={
                    "http://www.tokiohotelamerica.com/wp-content/uploads/2020/05/mobil-odeme-ile-bahis-para-yatirma.jpg.webp"
                  }
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  E-Cüzdan
                </div>
                <h3 className="mt-0 mb-12">E-Cüzdan</h3>
                <p className="m-0">
                  Farklı para birimlerindeki hesaplarınızı rahatlıkla yönetin.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={
                    "https://cdn.pixabay.com/photo/2019/01/23/20/08/wallet-3950973_960_720.jpg"
                  }
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
