const $ = (id) => document.querySelector(id);
const selectorToString = (selector) => {
    const nodeList = document.querySelectorAll(selector);
    const stringedSelector = [...nodeList];
    return stringedSelector;
}

// Universal

const body = $('body');

// Sections

const profilesSection = $('.main--routes-container'); 
const detailSection = $('.movie-detail__main-container'); 
const configSection = $('.more__main-container');
const genericVScrollContainer = $('.generic__vScrollContainer');
const searchVScrollContainer = $('.search__vScrollContainer');

// Containers
const homeHeader = $('.header__home');
const profilesHeader = $('.header__profile-selection');
const notFoundHeader = $('.header__not-found');
const movieDetailHeader = $('.header__movie-detail');
const configHeader = $('.header__more');
const moviesSeriesHeader = $('.header__movies-series');
const searchHeader = $('.header__search');

const contentDetailsImageContainer = $('.movie__image-container');
const contentDetailsFeatures = $('.movie__features');

const footer = $('.footer')

const heroContainer = $('.hero-movie'); 
const genreContainer = $('.genre-movies__main-container'); 
const topContainer = $('.top-movies__main-container'); 
const myListContainer = $('.my-list__main-container'); 
const notFoundContainer = $('.not-found__main-container');
const topSearchedContentContainer = $('.search__content-container--top');
const searchContentContainer = $('.search__content-container');

const topMovieContainer = $('.top__image');
const topScrollContainer = $('.top-movies__scroll-container');
const myListScrollContainer = $('.my-list__scroll-container');

const contentImageContainer = $('.movie-preview__image');
const contentInfoContainer = $('.movie__info');

const contentInfoTitle = $('.movie__info--title');
const contentInfoFeatures = $('.movie__info--features');
const contentInfoDescription = $('.movie__info--description');

const contentInfoRelease = $('.info--release');
const contentInfoLasts = $('.info--lasts');

const movieDescriptionContainer = $('.hero-movie__description-container')

const detailsMyListButtonContainer = $('.button--my-list')
const previewMyListButtonContainer = $('.buttons--list')
const heroMyListButtonContainer = $('.buttons--my-list')

const profileContainer = selectorToString('.main--profile')
const profileImage = selectorToString('.main--profile div img')
const profileName = selectorToString('.main--profile p')

const profileContainerMore = selectorToString('.main--profile--more')
const profileImageMore = selectorToString('.main--profile--more div img')
const profileNameMore = selectorToString('.main--profile--more p')

const categoriesModalContainer = $('.categories-modal__main-container ul');

// Elements

const heroMovieLogo = $('.hero-movie__logo')

const topTitle = $('.top-movies__title');
const contentDetailsTitle = $('.movie__title');
const contentDetailsDescription = $('.overview');
const contentDetailsStarring = $('.starring p');
const contentDetailsDirectingText = $('.direction p');
const contentDetailsDirectingTitle = $('.direction strong');

const moreButton = selectorToString('.profile__more-button');
const backButton = selectorToString('.back--button');
const seriesButton = selectorToString('.series--button');
const moviesButton = selectorToString('.movies--button');
const searchButton = selectorToString('.search--button');
const categoriesHomeButton = $('.categories--button');
const categoriesMovieSerieButton = $('.modal--categories')
const closeButton = $('.movie__close');
const moreDetailsPreviewButton = $('.more__container p');
const movieSerieModalButton = $('.modal--movie-serie')
const movieSerieModalClose = $('.categories-modal__main-container div button')

const searchVScrollContainerTitle = $('.search__vScrollContainer h2');
const categoriesMovieSerieButtonText = $('.modal--categories button')

const searchInput = $('.search--input');

const sectionTitle = $('.navbar-left h2');

// Modals

const moviePreviewModal = $('.movie-preview__main-container')
const categoriesModal = $('.categories-modal__main-container')
