ESERCIZI:

Creare usando CRA una applicazione. Inserire "React router" come dipendenza e implementare un routing che permetta di:

Mostrare <HomePage /> in "/";
Mostrare <CatalogPage /> in "/catalogo";
Mostrare <ErrorPage /> in tutti gli altri casi(miro);
Creare una <Navbar /> visibile su tutte le pagine;

--------Documentazione:

 <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>,

<BrowserRouter> is the recommended interface for running React Router in a web browser. A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

IN APP ---> <route> <-----

---

Link con React Native Version:

<nav>
    <Link to="/about">About</Link>
</nav>

---

Link con MAP e Key:

<ul>
    {users.map((user) => (
      <li key={user.id}>
          <Link to={user.id}>{user.name}</Link>
      </li>
        ))}
      </ul>

----ESERCIZIO

scrivere il nostro custom hook useFetch che gestisca {loading, data, error}
pagina home: mostrare lista categorie
pagina categoria: mostrare lista ricette di categoria
Sviluppare un po' di UI che sia più carina della lezione

----Documentazione:

{USE PARAMS} -cos'è e che mi rappresenta?

The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.

It means whatever you set up in useParams(ex: title), your params have to match with the <Route path='/path/:title'> .

NEL PADRE (nel nostro caso APP) abbiamo:
<Route path="/catalogo/:categoryName" element={<Category />} />
quel {/:categoryName} è il nostro UseParams che ci andiamo a richiamare nella pagina Category, così:

            const params = useParams();
            const {categoryName} = params;

This /:name can be anything, as long as it matches with the parameters/keys of your data. This is also the key when we need to use useParams later on.

First off, we need to make sure the { name } matches with our /explore/:name parameter. Basically, you can name the parameter anything you want, but you would want to match with one of the key in your list so there’s no confusion.

---ESERCIZI

vedere cos'è useContext [ok]
formattare i dati della singola ricetta
pagina di dettaglio ricetta
Inserire usando sub-routes delle tab contententi: Istruzioni, Ingredienti, video di YouTube
Scrivere poca UI

- Esercizio di ieri
- Link [end]
- Navigate e useNavigate
- useSearchParams
- props nei link, useLocation
- Route guards

----Documentazione:

NavLink:
A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
<NavLink to="/about">About</NavLink>

className: string | func
className can either be a string or a function that returns a string. If the function className is used, the link’s active state is passed as a parameter. This is helpful if you want to exclusively apply a className to an inactive link.

<NavLink
to="/faq"
className={isActive =>
"nav-link" + (!isActive ? " unselected" : "")
}

> FAQs
> </NavLink>
