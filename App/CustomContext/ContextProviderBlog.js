import { BlogContext } from './ContextBuild';
const ContextProviderBlog = ({children})=>{
    return <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
};

export default ContextProviderBlog