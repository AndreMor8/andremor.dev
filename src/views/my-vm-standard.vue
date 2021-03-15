<template>
  <div>
      <GoHome></GoHome>
    <h1>
      <span>My recommended standard when testing beta versions of Windows</span>
    </h1>
    <p>
      <span class="large"
        >I was also in that background where I no longer knew whether to test
        the betas as 16 colors or force myself to emulate it with PCem, or run
        the beta without Aero or special graphic features, even without a
        network, but here I will be recompiling which virtualizers to use when
        testing certain Windows builds.</span
      >
    </p>
    <p>
      <span class="large"
        >For me, having a pleasant speed, and having all the features of the
        operating system active, is the best way to test a beta version of
        Windows (hardware specific tests do not enter here), so here is the
        list.</span
      >
    </p>
    <ul>
      <li><span>Windows NT 3.1 RTM, Windows NT 3.50 and 3.51 RTM</span></li>
      <br />
      <span class="large"
        >I recommend using VirtualBox, using OS Windows NT 3.x.<br />If for some
        reason it fails, use Other Windows (32-bit).<br />No, giving them
        specific names doesn't help.<br />Use the VirtualBox video driver that
        is compatible from 3.50 to Windows 7.</span
      ><br /><br />
      <li>
        <span
          >Windows 9x versions less than Windows 95 B, Windows NT versions less
          than NT 4.0</span
        >
      </li>
      <br />
      <span class="large"
        >No virtualizer supports it 100%, I recommend using emulators like
        PCem.</span
      ><br /><br />
      <li><span>Windows 95 version B or major</span></li>
      <br />
      <span class="large">I recommend VMware, with the default settings.</span
      ><br /><br />
      <li><span>Windows 98 build 4.10.1691.3 or minor</span></li>
      <br />
      <span class="large"
        >I recommend VirtualBox, use it with Legacy virtualization mode without
        Nested Paging, with OS Windows 95, and without enabling ACPI, everything
        else by default.<br />You can get 32-bit mode with a generic VESA
        driver.<br />Disable ACPI on VirtualBox:
        <span class="large code"
          >VBoxManage modifyvm "myname" --acpi off</span
        ></span
      ><br /><br />
      <li><span>Windows 98 build 4.10.1702 or major</span></li>
      <br />
      <span class="large"
        >I recommend VMware, with the default settings.<br />Remember the driver
        that had to be installed manually with Windows 95? Use that to get
        32-bit mode.</span
      ><br /><br />
      <li><span>Windows 2000 (any beta)</span></li>
      <br />
      <span class="large"
        >I recommend VirtualBox (on build 2072+, without enabling ACPI, see
        <a
          href="https://www.betaarchive.com/forum/viewtopic.php?p=448150#p448150"
          target="_blank"
          >here</a
        >), everything else by default.<br />Use the VirtualBox video driver
        that is compatible from 3.50 to Windows 7.</span
      ><br /><br />
      <li><span>Windows Neptune, Windows Whistler (any beta)</span></li>
      <br />
      <span class="large"
        >I recommend VMware, with VMware 6.5-7.x support, with the default
        settings, and disabling ACPI if installation fails.<br />Get 32-bit mode
        with VMware 7.0 drivers<br />Disable ACPI on VMware (Put this in the
        last line of the VM's .vmx):
        <span class="large code">acpi.present = "FALSE"</span></span
      ><br /><br />
      <li><span>Windows Longhorn (any beta)</span></li>
      <br />
      <span class="large"
        >I recommend VMware, with VMware 6.5-7.x support, with the default
        settings.<br />Get special features with VMware 6.5 drivers<br />More
        information here:
        <a href="https://longhorn.ms/desktop-compositing/" target="_blank"
          >https://longhorn.ms/desktop-compositing/</a
        ></span
      ><br /><br />
      <li><span>Windows 7 (any beta)</span></li>
      <br />
      <span class="large"
        >I recommend VMware, with VMware 6.5-7.x support, with the default
        settings.<br />I have not tried Aero on this OS yet but I see that with
        the 6.5 drivers it should work. I will see that soon.</span
      ><br /><br />
      <li><span>Windows 8 and 10 (any beta)</span></li>
      <br />
      <span class="large"
        >With the exception of the Windows 8 builds that still have Aero, use
        VMware, with VMware 6.5-7.x support, with the default settings, using
        the 7.0 drivers.<br />After that, I don't think it makes sense to
        recommend virtualizers, after all they are recent systems, and any
        virtualizer should run them.<br />If you still want my opinion, use
        VMware with the default options.</span
      ><br /><br />
    </ul>
  </div>
</template>

<style>
.large {
  border-radius: 0%;
  padding: 0px;
  background-color: #9fff8b;
  font-size: 22px !important;
}
.code {
  background-color: rgb(177, 0, 0);
  color: #fff;
}
</style>

<script>
import GoHome from '@/components/go-home.vue';
export default {
  name: "my-vm-standard",
  components: { GoHome }
};
</script>