'use client';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
//👆 classic theme, see below for other theme / css options

function Paginate({ setCurrentPage, totalPages, currentPage,onPageChange}) {
  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      maxWidth={90}
      onPageChange={onPageChange? onPageChange : async (value) => {
        setCurrentPage(value);
        await new Promise((resolve)=>setTimeout(resolve,400))
        const div = document.getElementById("feedback-paginate");
        div.scrollIntoView({ behavior: 'smooth' });
      }}
    />
  );
}

export default Paginate;
