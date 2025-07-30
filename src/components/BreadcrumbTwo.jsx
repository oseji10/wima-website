const BreadcrumbTwo = ({ title }) => {
  return (
    <section className='common-banner'>
      <div className='container'>
        <div className='row'>
          <div className='common-banner__content text-center'>
            <h2 className='title-animation_inner'>{title}</h2>
          </div>
        </div>
      </div>
      <div className='banner-bg'>
        <img src='/assets/images/breadcrumbs/breadcrumb1.png' />
      </div>
    </section>
  );
};

export default BreadcrumbTwo;
