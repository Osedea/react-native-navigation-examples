import com.reactnativenavigation.NavigationApplication;

 public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug() {
      return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          // eg. new VectorIconsPackage()
      );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
      return getPackages();
    }

    @Override
    public String getJSMainModuleName() {
      return "index";
    }
 }