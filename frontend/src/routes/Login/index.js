import Button from "components/Button";
import Input from "components/Input";
import PawPatternBackground from "components/PawPatternBackground";

const Login = () => {
    return (
      <PawPatternBackground classes="flex flex-col items-center justify-center h-screen text-black"> 
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold mb-5"> Minha Pawsitive </span>
          <p></p>
          <div className="space-y-4">
              <div><Input type="text" field="Carteirinha"/></div>
              <div className=""><Input type="password" field="Senha"/></div>
          </div>
          <Button href="/minha-pawsitive"> Entrar </Button>
          <span className="mt-4 cursor-pointer hover:underline underline-offset-4 transition font-medium"> Primeiro acesso? </span>
        </div>
      </PawPatternBackground>
    );
}

export default Login;