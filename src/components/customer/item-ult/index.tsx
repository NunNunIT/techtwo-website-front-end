// import libs
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";
import { convertNumberToMoney } from "@/utils";
import { CldImage } from "next-cloudinary";

// import css
import styles from "./style.module.css";

const cx = classNames.bind(styles);

export default function CustomerHeaderItemUlt({ product }) {
  // Kiểm tra nếu giá lowest_price và product_price bằng nhau
  const showPrice =
    product.lowest_price === product.product_price
      ? product.lowest_price
      : `${convertNumberToMoney(product.lowest_price)}đ`;

  return (
    <div className={cx("header__item-ult")}>
      <div className={cx("header__item-ult__title")}>
        <Link
          className={cx("header__item-ult__title__link")}
          title={product.product_name}
          href={`/${product.product_slug}?pid=${product.product_id}`} // Đường dẫn của sản phẩm
        >
          {product.product_name}
        </Link>
        <div className={cx("header__item-ult__title__price")}>
          {showPrice}
          {product.lowest_price !== product.product_price && ( // Kiểm tra nếu lowest_price khác product_price
            <small>{convertNumberToMoney(product.product_price)}đ</small> // Hiển thị product_price trong thẻ small
          )}
        </div>
      </div>
      <div className={cx("header__item-ult__thumbs")}>
        <Link href="#" className={cx("header__item-ult__thumbs__link")}>
          <CldImage
            className={cx("header__item-ult__thumbs__img")}
            src={product.product_img.link} // Sử dụng link hình ảnh từ dữ liệu sản phẩm
            alt={product.product_img.alt} // Sử dụng alt từ dữ liệu sản phẩm
            fill={true}
          />
        </Link>
      </div>
    </div>
  );
}
