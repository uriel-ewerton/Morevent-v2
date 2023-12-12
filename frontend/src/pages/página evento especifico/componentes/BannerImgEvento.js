import styles from './BannerImgEvento.module.css'

function BannerImgEvento({imgBannerBack, imgBannerFrente}){
    
    return(
        <div className={styles.imgBanner}>
            <img className={styles.bannerCostas} src={imgBannerBack} alt="" />
            <img className={styles.bannerFrente} src={imgBannerFrente} alt="" />
        </div>
    )
}

export default BannerImgEvento