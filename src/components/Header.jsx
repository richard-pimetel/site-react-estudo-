import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BookOpen, Code, Layers, Lightbulb, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ListItem = React.forwardRef(({ className, title, children, icon: Icon, to, ...props }, ref) => {
  const navigate = useNavigate();
  const { setMobileMenuOpen } = props;

  const handleClick = (e) => {
    e.preventDefault();
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    navigate(to);
  };

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          onClick={handleClick}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {Icon && <Icon className="h-5 w-5" />}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleMobileLinkClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Code className="h-6 w-6 text-primary" />
          </motion.div>
          <span className="text-xl font-bold gradient-text">ReactMaster</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Fundamentos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem to="/fundamentos/componentes" title="Componentes" icon={Layers} setMobileMenuOpen={setMobileMenuOpen}>
                      Aprenda a criar e reutilizar componentes React
                    </ListItem>
                    <ListItem to="/fundamentos/props" title="Props" icon={Lightbulb} setMobileMenuOpen={setMobileMenuOpen}>
                      Entenda como passar dados entre componentes
                    </ListItem>
                    <ListItem to="/fundamentos/estado" title="Estado" icon={BookOpen} setMobileMenuOpen={setMobileMenuOpen}>
                      Gerencie dados dinâmicos em seus componentes
                    </ListItem>
                    <ListItem to="/fundamentos/hooks" title="Hooks" icon={Code} setMobileMenuOpen={setMobileMenuOpen}>
                      Domine os hooks essenciais do React
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/projetos" className={navigationMenuTriggerStyle()}>
                  Projetos Práticos
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/recursos" className={navigationMenuTriggerStyle()}>
                  Recursos
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg md:hidden"
          >
            <nav className="container py-4">
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium mb-2 px-2">Fundamentos</h3>
                  <ul className="space-y-1">
                    <li>
                      <button onClick={() => handleMobileLinkClick("/fundamentos/componentes")} className="w-full text-left px-2 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md">
                        Componentes
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleMobileLinkClick("/fundamentos/props")} className="w-full text-left px-2 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md">
                        Props
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleMobileLinkClick("/fundamentos/estado")} className="w-full text-left px-2 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md">
                        Estado
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleMobileLinkClick("/fundamentos/hooks")} className="w-full text-left px-2 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md">
                        Hooks
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button onClick={() => handleMobileLinkClick("/projetos")} className="w-full text-left px-2 py-2 font-medium hover:text-primary hover:bg-accent rounded-md">
                    Projetos Práticos
                  </button>
                </li>
                <li>
                  <button onClick={() => handleMobileLinkClick("/recursos")} className="w-full text-left px-2 py-2 font-medium hover:text-primary hover:bg-accent rounded-md">
                    Recursos
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
