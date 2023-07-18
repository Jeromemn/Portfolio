
// children is a page or nested layout
const projectlayout = (children) => {
  return (
   <div>
    {/* shared UI ex: header or sidebar */}
    <header> ... </header>
    {children}
   </div>
  );
}

export default projectlayout;