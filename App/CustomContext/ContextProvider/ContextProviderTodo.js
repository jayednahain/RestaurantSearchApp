import { TodoContext } from '../ContextBuild';
const ContextProviderTodo = ({ children }) => {
    return <TodoContext.Provider>
        {children}
    </TodoContext.Provider>
};

export default ContextProviderTodo; 