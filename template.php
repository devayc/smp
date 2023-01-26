<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $item
 * @var array $actualItem
 * @var array $minOffer
 * @var array $itemIds
 * @var array $price
 * @var array $measureRatio
 * @var bool $haveOffers
 * @var bool $showSubscribe
 * @var array $morePhoto
 * @var bool $showSlider
 * @var bool $itemHasDetailUrl
 * @var string $imgTitle
 * @var string $productTitle
 * @var string $buttonSizeClass
 * @var CatalogSectionComponent $component
 */
?>
<?
//Проверяем, есть ли данный товар в отложенных
$curProductId = $item['ID'];
$dbBasketItems = CSaleBasket::GetList(
    array(
        "NAME" => "ASC",
        "ID" => "ASC"
    ),
    array(
        "FUSER_ID" => CSaleBasket::GetBasketUserID(),
        "LID" => SITE_ID,
        "PRODUCT_ID" => $curProductId,
        "ORDER_ID" => "NULL",
        "DELAY" => "Y"
    ),
    false,
    false,
    array("PRODUCT_ID")
);
while ($arItems = $dbBasketItems->Fetch()) {
    $itInDelay = $arItems['PRODUCT_ID'];
}

?>
<?
$allPrice = array();
$price_result = CPrice::GetList(
    array(),
    array(
        "PRODUCT_ID" => $item['OFFERS'][0]['ID'],
    )
);
while ($arPrices = $price_result->Fetch()) {
    $allPrice[$arPrices['CATALOG_GROUP_ID']] = $arPrices['PRICE'];
}
?><pre hidden><? var_dump($allPrice) ?></pre>
<div class="section-on-main__product-item product-card">
    <div class="product-card__visible--always">
        <div class="product-card__image">
            <div class="product-card__slider" id="<?= $itemIds['PICT_SLIDER'] ?>">
                <div class="product-card__slide">
				<!-- loading="lazy" width="400" hight= "233" -->
                    <? if ($item['PREVIEW_PICTURE']) ?><img 
                            data-lazy="<? $img = CFile::ResizeImageGet($item['PREVIEW_PICTURE']['ID'], array("width" => 400, "height" => 532), 'BX_RESIZE_IMAGE_PROPORTIONAL', true); echo $img['src']; ?>"
                            alt="<?= $imgTitle ?>" alt="<?= $imgTitle ?>" loading="lazy" class="mw-100 product-card__img">
                           
                            <img loading="lazy"
                           src="<? $img = CFile::ResizeImageGet($item['PREVIEW_PICTURE']['ID'],  'BX_RESIZE_IMAGE_PROPORTIONAL', true) ?>"
                           width="400" height="532"
                            alt="<?= $imgTitle ?>"  class="mw-100 product-card__img">
                </div><? if ($item['PROPERTIES']['MORE_PHOTO']['VALUE']) : ?><? foreach ($item['PROPERTIES']['MORE_PHOTO']['VALUE'] as $photo) : ?>
                    <div class="product-card__slide">
                    <img data-lazy="<? $img = CFile::ResizeImageGet($photo, array("width" => 400, "height" => 532), 'BX_RESIZE_IMAGE_PROPORTIONAL', true);
                    echo $img['src']; ?>" alt="<?= $imgTitle ?>" class="mw-100 product-card__img">
                    </div><? endforeach; ?><? endif; ?>
            </div>
            <div class="product-card__badges" onclick="$(this.closest('.product-card__image')).next()[0].click();">
                <?
                $db_old_groups = CIBlockElement::GetElementGroups($item["ID"], true);
                $ar_new_groups = array();
                while ($ar_group = $db_old_groups->Fetch()) {
                    $ar_new_groups[] = $ar_group["ID"];
                }
                ?>
                <? if (in_array(70, $ar_new_groups)) { ?>
                    <div class="product-card__badge product-card__badge--new-color" style="z-index: 1;">New colour</div>
                <? }; ?>
                <? if (in_array(71, $ar_new_groups)) { ?>
                    <div class="product-card__badge product-card__badge--new" style="z-index: 1;">New</div>
                <? }; ?>
                <? if (in_array(68, $ar_new_groups) && !in_array(67, $ar_new_groups)) { ?>
                    <div class="product-card__badge product-card__badge--hit" style="z-index: 1;">Hit</div>
                <? }; ?>
                <? if (in_array(67, $ar_new_groups)) { ?>
                    <div class="product-card__badge product-card__badge--sale" style="z-index: 1;">Sale</div>
                <? }; ?>
            </div>
            <!-- <div class="product-card__fast-view" data-target="#fast-view" data-toggle="modal" data-id="<?= $item['ID'] ?>">Быстрый просмотр</div> -->
        </div>
        <a href="<?= $item['DETAIL_PAGE_URL'] ?>" class="product-card__name"><?= $productTitle ?></a>
    </div>
    <div class="product-card__visible--default product-card__invisible--on-hover">
        <div class="product-card__price-from"><?
            if (!empty($price)) {
                if ($arParams['PRODUCT_DISPLAY_MODE'] === 'N' && $haveOffers) {
                    echo 'От ' . $price['PRINT_RATIO_PRICE'];
                } else {
                    echo $price['PRINT_RATIO_PRICE'];
                }
            }
            ?></div>
    </div>
    <div class="product-card__visible--on-hover product-card__invisible--default">
        <div class="product-card__display-properties">
            <?
            foreach ($item['DISPLAY_PROPERTIES'] as $code => $displayProperty) { ?>
                <div class="product-card__display-property"><?= (is_array($displayProperty['DISPLAY_VALUE']) ? implode(' / ', $displayProperty['DISPLAY_VALUE']) : $displayProperty['DISPLAY_VALUE']) ?></div>
            <? } ?>
        </div>
        <table class="product-card__price-table">
            <tr>
                <th>от 30 000</th>
                <th>от 15 000</th>
                <th>от 3000</th>
            </tr>
            <tr>
                <td>
                    <? if (!empty($allPrice[4])) {
                        echo number_format($allPrice[4], 0, '.', '') . ' руб.';
                    }
                    ?>
                </td>
                <td>
                    <? if (!empty($allPrice[6])) {
                        echo number_format($allPrice[6], 0, '.', '') . ' руб.';
                    }
                    ?>
                </td>
                <td>
                    <? if (!empty($allPrice[7])) {
                        echo number_format($allPrice[7], 0, '.', '') . ' руб.';
                    }
                    ?>
                </td>
            </tr>
        </table>
        <div class="product-card__sizes">
            <?
            $sizes = array_map(function ($el) {
                return array_values(array_filter(array($el['PROPERTIES']['RAZMER']['VALUE'])))[0];
            }, $item['OFFERS']);
            sort($sizes);
            $sizes = array_unique($sizes);
            ?>
            <? foreach ($sizes as $size) : ?>
                <div class="product-card__size"><?= $size ?></div><? endforeach; ?>
        </div>
        <div class="product-card__buttons">
            <a href="<?= $item['DETAIL_PAGE_URL'] ?>" class="product-card__buy">Купить</a>
            <a href="javascript:void(0)" onclick="add2wish(
                    '<?= $item["ID"] ?>',
                    '<?= $item["CATALOG_PRICE_ID_1"] ?>',
                    '<?= $item["CATALOG_PRICE_1"] ?>',
                    '<?= $item["NAME"] ?>',
                    '<?= $item["DETAIL_PAGE_URL"] ?>',
                    this)"
               class="product-card__favorite <? if ((in_array($item["ID"], $delaydBasketItems)) || (isset($itInDelay))) {
                   echo 'liked';
               } ?>">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1_3<?=$item['ID']?>" fill="white">
                        <path d="M7.71427 14.1655C7.49462 14.1655 7.28286 14.0881 7.11783 13.9476C6.49456 13.4177 5.89364 12.9198 5.36348 12.4806L5.36077 12.4783C3.8064 11.1905 2.46415 10.0784 1.53024 8.98281C0.486262 7.75806 0 6.59683 0 5.32825C0 4.09573 0.434705 2.95864 1.22395 2.12631C2.02262 1.28414 3.1185 0.820312 4.31009 0.820312C5.20068 0.820312 6.0163 1.09406 6.73421 1.63387C7.09653 1.90636 7.42494 2.23984 7.71427 2.62882C8.00372 2.23984 8.33202 1.90636 8.69445 1.63387C9.41236 1.09406 10.228 0.820312 11.1186 0.820312C12.31 0.820312 13.406 1.28414 14.2047 2.12631C14.994 2.95864 15.4285 4.09573 15.4285 5.32825C15.4285 6.59683 14.9424 7.75806 13.8984 8.9827C12.9645 10.0784 11.6224 11.1904 10.0682 12.4781C9.53714 12.918 8.93528 13.4167 8.31059 13.9478C8.14568 14.0881 7.9338 14.1655 7.71427 14.1655ZM4.31009 1.69899C3.37393 1.69899 2.51394 2.06223 1.88831 2.72186C1.25338 3.39146 0.903663 4.31705 0.903663 5.32825C0.903663 6.39519 1.31153 7.3494 2.22602 8.42216C3.10991 9.45911 4.42462 10.5484 5.94685 11.8096L5.94967 11.8119C6.48184 12.2528 7.08511 12.7527 7.71298 13.2865C8.34461 12.7517 8.94882 12.251 9.48205 11.8094C9.48368 11.808 9.48532 11.8067 9.48695 11.8053C11.007 10.5458 12.3197 9.458 13.2026 8.42216C14.117 7.3494 14.5249 6.39519 14.5249 5.32825C14.5249 4.31705 14.1752 3.39146 13.5402 2.72186C12.9147 2.06223 12.0546 1.69899 11.1186 1.69899C10.4328 1.69899 9.80316 1.91093 9.24722 2.32887C8.75177 2.70149 8.40664 3.17253 8.2043 3.50212C8.10024 3.67161 7.91709 3.77277 7.71427 3.77277C7.51146 3.77277 7.3283 3.67161 7.22424 3.50212C7.02202 3.17253 6.67689 2.70149 6.18133 2.32887C5.62538 1.91093 4.99575 1.69899 4.31009 1.69899Z"></path>
                    </mask>
                    <path d="M4.31009 1.69899C3.37393 1.69899 2.51394 2.06223 1.88831 2.72186C1.25338 3.39146 0.903663 4.31705 0.903663 5.32825C0.903663 6.39519 1.31153 7.3494 2.22602 8.42216C3.10991 9.45911 4.42462 10.5484 5.94685 11.8096L5.94967 11.8119C6.48184 12.2528 7.08511 12.7527 7.71298 13.2865C8.34461 12.7517 8.94882 12.251 9.48205 11.8094L9.48695 11.8053C11.007 10.5458 12.3197 9.458 13.2026 8.42216C14.117 7.3494 14.5249 6.39519 14.5249 5.32825C14.5249 4.31705 14.1752 3.39146 13.5402 2.72186C12.9147 2.06223 12.0546 1.69899 11.1186 1.69899C10.4328 1.69899 9.80316 1.91093 9.24722 2.32887C8.75177 2.70149 8.40664 3.17253 8.2043 3.50212C8.10024 3.67161 7.91709 3.77277 7.71427 3.77277C7.51146 3.77277 7.3283 3.67161 7.22424 3.50212C7.02202 3.17253 6.67689 2.70149 6.18133 2.32887C5.62538 1.91093 4.99575 1.69899 4.31009 1.69899Z" fill="#FFF"></path>
                    <path d="M1.88831 2.72186L1.52553 2.37778L1.52549 2.37782L1.88831 2.72186ZM2.22602 8.42216L2.60654 8.09781L2.60653 8.09779L2.22602 8.42216ZM5.94685 11.8096L5.62784 12.1946L5.63081 12.1971L5.94685 11.8096ZM5.94967 11.8119L6.26867 11.4269L6.26571 11.4245L5.94967 11.8119ZM7.71298 13.2865L7.38912 13.6674L7.71232 13.9422L8.03607 13.6681L7.71298 13.2865ZM13.2026 8.42216L12.8221 8.09781L12.8221 8.09783L13.2026 8.42216ZM13.5402 2.72186L13.1774 3.0659L13.1774 3.06592L13.5402 2.72186ZM9.24722 2.32887L8.94677 1.92921L8.94669 1.92927L9.24722 2.32887ZM8.2043 3.50212L8.6304 3.76373L8.63041 3.76371L8.2043 3.50212ZM7.22424 3.50212L6.79806 3.7636L6.79814 3.76373L7.22424 3.50212ZM6.18133 2.32887L6.48182 1.92924L6.48178 1.92921L6.18133 2.32887ZM4.31009 1.19899C3.24133 1.19899 2.24869 1.61532 1.52553 2.37778L2.25109 3.06594C2.77919 2.50914 3.50653 2.19899 4.31009 2.19899V1.19899ZM1.52549 2.37782C0.793698 3.14957 0.403663 4.2024 0.403663 5.32825H1.40366C1.40366 4.43171 1.71306 3.63335 2.25113 3.0659L1.52549 2.37782ZM0.403663 5.32825C0.403663 6.54776 0.878992 7.61273 1.84551 8.74653L2.60653 8.09779C1.74407 7.08607 1.40366 6.24262 1.40366 5.32825H0.403663ZM1.8455 8.74651C2.76385 9.82389 4.11796 10.9436 5.62785 12.1946L6.26585 11.4246C4.73128 10.1532 3.45597 9.09433 2.60654 8.09781L1.8455 8.74651ZM5.63081 12.1971L5.63363 12.1994L6.26571 11.4245L6.26289 11.4221L5.63081 12.1971ZM5.63068 12.1969C6.16305 12.638 6.764 13.136 7.38912 13.6674L8.03684 12.9056C7.40622 12.3694 6.80063 11.8676 6.26866 11.4269L5.63068 12.1969ZM8.03607 13.6681C8.66537 13.1353 9.26765 12.6362 9.80097 12.1945L9.16313 11.4243C8.62999 11.8658 8.02385 12.3681 7.38989 12.9049L8.03607 13.6681ZM13.5831 8.74651C14.5495 7.61273 15.0249 6.54777 15.0249 5.32825H14.0249C14.0249 6.24262 13.6845 7.08607 12.8221 8.09781L13.5831 8.74651ZM15.0249 5.32825C15.0249 4.2024 14.6349 3.14957 13.903 2.3778L13.1774 3.06592C13.7155 3.63336 14.0249 4.4317 14.0249 5.32825H15.0249ZM13.903 2.37782C13.18 1.61531 12.1872 1.19899 11.1186 1.19899V2.19899C11.922 2.19899 12.6494 2.50915 13.1774 3.0659L13.903 2.37782ZM11.1186 1.19899C10.3228 1.19899 9.588 1.44715 8.94677 1.92921L9.54767 2.72853C10.0183 2.37471 10.5428 2.19899 11.1186 2.19899V1.19899ZM8.94669 1.92927C8.3829 2.35328 7.99887 2.88106 7.77819 3.24053L8.63041 3.76371C8.81441 3.464 9.12064 3.0497 9.54775 2.72847L8.94669 1.92927ZM7.7782 3.24051C7.76726 3.25834 7.74747 3.27277 7.71427 3.27277V4.27277C8.08671 4.27277 8.43322 4.08488 8.6304 3.76373L7.7782 3.24051ZM7.71427 3.27277C7.68107 3.27277 7.66128 3.25833 7.65034 3.24051L6.79814 3.76373C6.99532 4.08489 7.34185 4.27277 7.71427 4.27277V3.27277ZM7.65042 3.24064C7.4298 2.88106 7.04574 2.35326 6.48182 1.92924L5.88084 2.7285C6.30804 3.04972 6.61424 3.464 6.79806 3.7636L7.65042 3.24064ZM6.48178 1.92921C5.84055 1.44715 5.1058 1.19899 4.31009 1.19899V2.19899C4.8857 2.19899 5.41021 2.37471 5.88088 2.72853L6.48178 1.92921ZM9.80597 12.1903C11.3137 10.941 12.6658 9.82276 13.5831 8.74649L12.8221 8.09783C11.9737 9.09324 10.7003 10.1505 9.16793 11.4203L9.80597 12.1903ZM7.11783 13.9476L7.76608 13.1862L7.76556 13.1857L7.11783 13.9476ZM5.36348 12.4806L4.7163 13.243L4.72553 13.2507L5.36348 12.4806ZM5.36077 12.4783L6.00795 11.7159L5.99876 11.7083L5.36077 12.4783ZM1.53024 8.98281L0.769203 9.63152L0.769213 9.63153L1.53024 8.98281ZM1.22395 2.12631L0.498352 1.43819L0.498312 1.43823L1.22395 2.12631ZM6.73421 1.63387L7.33527 0.834665L7.33519 0.834607L6.73421 1.63387ZM7.71427 2.62882L6.9119 3.22564L7.7141 4.30414L8.51653 3.2258L7.71427 2.62882ZM8.69445 1.63387L9.29539 2.43316L9.29543 2.43313L8.69445 1.63387ZM14.2047 2.12631L14.9303 1.43821L14.9303 1.43818L14.2047 2.12631ZM13.8984 8.9827L13.1374 8.33395L13.1373 8.33402L13.8984 8.9827ZM10.0682 12.4781L10.7061 13.2482L10.7062 13.2481L10.0682 12.4781ZM8.31059 13.9478L7.66286 13.1859L7.6626 13.1861L8.31059 13.9478ZM9.48205 11.8094L8.84401 11.0394L10.1201 12.5794L9.48205 11.8094ZM9.48695 11.8053L10.125 12.5753L8.84895 11.0353L9.48695 11.8053ZM7.71427 13.1655C7.72886 13.1655 7.74771 13.1705 7.76608 13.1862L6.46958 14.709C6.81801 15.0057 7.26038 15.1655 7.71427 15.1655V13.1655ZM7.76556 13.1857C7.13675 12.6511 6.53116 12.1494 6.00143 11.7105L4.72553 13.2507C5.25612 13.6902 5.85237 14.1843 6.4701 14.7095L7.76556 13.1857ZM6.01062 11.7182L6.00791 11.7159L4.71363 13.2407L4.71634 13.243L6.01062 11.7182ZM5.99876 11.7083C4.4213 10.4013 3.1566 9.34923 2.29127 8.33409L0.769213 9.63153C1.7717 10.8076 3.1915 11.9797 4.72278 13.2483L5.99876 11.7083ZM2.29128 8.3341C1.35899 7.24038 1 6.30079 1 5.32825H-1C-1 6.89287 -0.386461 8.27574 0.769203 9.63152L2.29128 8.3341ZM1 5.32825C1 4.33087 1.35037 3.44632 1.94959 2.81439L0.498312 1.43823C-0.480961 2.47097 -1 3.86059 -1 5.32825H1ZM1.94955 2.81443C2.55383 2.17724 3.38472 1.82031 4.31009 1.82031V-0.179688C2.85228 -0.179688 1.49141 0.391042 0.498352 1.43819L1.94955 2.81443ZM4.31009 1.82031C4.98187 1.82031 5.58697 2.02239 6.13323 2.43313L7.33519 0.834607C6.44563 0.165729 5.41949 -0.179688 4.31009 -0.179688V1.82031ZM6.13315 2.43308C6.41382 2.64416 6.67562 2.90799 6.9119 3.22564L8.51665 2.032C8.17426 1.57169 7.77924 1.16856 7.33527 0.834665L6.13315 2.43308ZM8.51653 3.2258C8.75306 2.90794 9.01478 2.64414 9.29539 2.43316L8.09351 0.834578C7.64926 1.16858 7.25438 1.57174 6.91201 2.03184L8.51653 3.2258ZM9.29543 2.43313C9.84168 2.0224 10.4468 1.82031 11.1186 1.82031V-0.179688C10.0092 -0.179688 8.98304 0.165725 8.09347 0.834607L9.29543 2.43313ZM11.1186 1.82031C12.0438 1.82031 12.8748 2.17724 13.4791 2.81444L14.9303 1.43818C13.9372 0.391039 12.5762 -0.179688 11.1186 -0.179688V1.82031ZM13.4791 2.81441C14.0783 3.44625 14.4285 4.33075 14.4285 5.32825H16.4285C16.4285 3.86071 15.9097 2.47103 14.9303 1.43821L13.4791 2.81441ZM14.4285 5.32825C14.4285 6.30086 14.0696 7.24043 13.1374 8.33395L14.6594 9.63145C15.8152 8.27569 16.4285 6.8928 16.4285 5.32825H14.4285ZM13.1373 8.33402C12.272 9.34925 11.0075 10.4012 9.4302 11.7081L10.7062 13.2481C12.2373 11.9796 13.657 10.8075 14.6595 9.63138L13.1373 8.33402ZM9.43029 11.708C8.89961 12.1476 8.29309 12.6501 7.66286 13.1859L8.95832 14.7097C9.57747 14.1833 10.1747 13.6884 10.7061 13.2482L9.43029 11.708ZM7.6626 13.1861C7.6811 13.1704 7.69974 13.1655 7.71427 13.1655V15.1655C8.16786 15.1655 8.61026 15.0058 8.95858 14.7095L7.6626 13.1861ZM10.1201 12.5794L10.125 12.5754L8.84895 11.0353L8.84405 11.0394L10.1201 12.5794ZM10.1201 12.5794C10.1799 12.5298 10.065 12.6251 10.125 12.5753L8.84891 11.0353C8.84813 11.036 8.84734 11.0366 8.84652 11.0373C8.84571 11.038 8.84486 11.0387 8.84401 11.0394L10.1201 12.5794Z" fill="#949494" mask="url(#path-1-inside-1_1_3<?=$item['ID']?>)"></path>
                </svg>

            </a>
        </div>
    </div>
</div>